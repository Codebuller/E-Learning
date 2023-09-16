import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";

import random from "random";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { getSession } from "./session";

export type WordPair = {
  en:string,
  ru:string,
  right:boolean,
  i: string,
}
export type Word = {
  en:string,
  ru:string,
}
export type AudioCard = {
  en:string,
  translate:string[],
  right:number,
}


const firebaseConfig = {
    apiKey: "AIzaSyCa_NRq0IAKKWTtHhI7qJDpAqJZl1JOvvw",
    authDomain: "e-learning-38c3d.firebaseapp.com",
    databaseURL: "https://e-learning-38c3d-default-rtdb.firebaseio.com",
    projectId: "e-learning-38c3d",
    storageBucket: "e-learning-38c3d.appspot.com",
    messagingSenderId: "1063563485812",
    appId: "1:1063563485812:web:2d32ed0d5fb4f490cae721"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);
  export const createUser = async (email:string, password:string) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
    
  }
  
  export const signInUser = async (email:string, password:string) => {
    return await signInWithEmailAndPassword(getAuth(app), email, password);
  }
  const dbRef =  ref(database)

  const GetFromDB = async ( request:string ):Promise<any>  =>{
    return (await get(child(dbRef, request))).val()
       
    
  }
  
  export async function* getWord(){
    
    for(let inde = 0;inde<10;++inde){
      
      let i:number = random.int(0,4999);
      const word:WordPair = await GetFromDB(`words/${i}`)
      if(random.boolean())
        yield {
          en: word.en,
          ru: word.ru,
          right: true,
          i: word.ru,
        }
      else{
        let j = random.int(1,500);
        j = (i-j>0) ?i-j :i+j;
        let another:WordPair = await GetFromDB(`words/${j}`);
        yield {
          en: word.en,
          ru: another.ru,
          right: false,
          i: word.ru,
        }
      
      }
    }
    
    
  }


  export async function* audioGet(){
    while(true){
      const keyWord:any =  await GetFromDB(`words/${random.int(0,4999)}`);
      
        const card:AudioCard =  {
          en: keyWord.en,
          translate:[],
          right:0,
        }
        card.right = random.int(0, 4);
        for(let i = -1;++i<5;){
          if(card.right === i){
            card.translate.push(keyWord.ru)
            continue;
          }
          card.translate.push((await GetFromDB(`words/${random.int(0,4999)}`)).ru);
        }
        
        yield card;
      
    }
    
  }
  interface Game {
    right:number,
    wrong:number,
    dataGame:number,
    series:number
  }

  export const putGameToDB = (game:Game,sprint:boolean) =>{
    if(!!sprint){
      try{set(ref(database, `users/${getSession().UID}/sprint/${game.dataGame.toString()}`), game
      );
    }
    catch(er:any){
      throw er;
    }
}
else{
  try{set(ref(database, `users/${getSession().UID}/audio/${Date.now().toString()}`), game
  );
}
catch(er:any){
  throw er;
}
}
  }
  
  //logic for adding words to db
  //
  // fetch(text)
  // .then(r => r.text())
  // .then(text => {
  //   let lines = text.split('\n')
  //   for(let i = 0;i<lines.length;++i){
  //     let pair = lines[i].split('/') 
  //     set(ref(database,'words/'+i.toString()),{
  //           ru: pair[1],
  //           en: pair[0],
  //       })
      
  //   }
  // })
  
  // words = []
  // set(ref(database,'words'+'i'),{
  //   {
  //     ru: word,
  //     en:'',

  //   }
  // })
export const restructDataUserAll = async () =>{
  const allGames = await GetFromDB(`users/${getSession().UID}/`);
  let sprintWords:number = 0,sprintCorrect:number = 0,sprintSeries:number = 0;
  let games = allGames['sprint']
    for (let key in games) {
    sprintWords+=games[key].right;
    sprintCorrect= sprintCorrect!==0 ? (sprintCorrect+games[key].right/(games[key].wrong+games[key].right))/2 : games[key].right/(games[key].wrong+games[key].right);
    sprintSeries = Math.max(sprintSeries,games[key].series);
    }
    
    sprintCorrect = Math.floor(sprintCorrect*100);
  games = allGames['audio']
  let audioWords:number = 0,audioCorrect:number = 0,audioSeries:number = 0;
  for (let key in games) {
    audioWords+=games[key].right;
    audioCorrect= audioCorrect!==0 ? (audioCorrect+games[key].right/(games[key].wrong+games[key].right))/2 : games[key].right/(games[key].wrong+games[key].right);
    audioSeries = Math.max(audioSeries,games[key].series);
    }
    
    audioCorrect = Math.floor(audioCorrect*100);

  return {sprint:{words:sprintWords,correct:sprintCorrect,series:sprintSeries},audio:{words:audioWords,correct:audioCorrect,series:audioSeries}};
}
export const restructDataUserDay = async () =>{
  const allGames = await GetFromDB(`users/${getSession().UID}/`);

  let sprintWords:number = 0,sprintCorrect:number = 0,sprintSeries:number = 0;
  let games = allGames['sprint']
    for (let key in games) {
      if(parseInt(key)/1000 + 86400 <  (new Date().getTime()/1000))
        continue;
      sprintWords+=games[key].right;
      sprintCorrect= sprintCorrect!==0 ? (sprintCorrect+games[key].right/(games[key].wrong+games[key].right))/2 : games[key].right/(games[key].wrong+games[key].right);
      sprintSeries = Math.max(sprintSeries,games[key].series);
    }
    
    sprintCorrect = Math.floor(sprintCorrect*100);
  games = allGames['audio']
  let audioWords:number = 0,audioCorrect:number = 0,audioSeries:number = 0;
  for (let key in games) {
      if(parseInt(key)/1000 + 86400 <  (new Date().getTime()/1000))
        continue;
      audioWords+=games[key].right;
      audioCorrect= audioCorrect!==0 ? (audioCorrect+games[key].right/(games[key].wrong+games[key].right))/2 : games[key].right/(games[key].wrong+games[key].right);
      audioSeries = Math.max(audioSeries,games[key].series);
    }
    
    audioCorrect = Math.floor(audioCorrect*100);

  return {sprint:{words:sprintWords,correct:sprintCorrect,series:sprintSeries},audio:{words:audioWords,correct:audioCorrect,series:audioSeries}};
}

