import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

import random from "random";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

export type WordPair = {
  en:string,
  ru:string,
  right:boolean,
  i: number,
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
    // set(ref(database,user))
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
          i: inde,
        }
      else{
        let j = random.int(1,500);
        j = (i-j>0) ?i-j :i+j;
        let another:WordPair = await GetFromDB(`words/${j}`);
        yield {
          en: word.en,
          ru: another.ru,
          right: false,
          i: inde,
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