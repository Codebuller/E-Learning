import React, { useEffect, useRef, useState } from "react"
import styles from './Sprint.module.css'
import { getWord, putGameToDB} from '../../helpers/firebase.js'
import LevelPicker from "../../UI/levelPicker/LevelPicker.js";
import Spiner from "../../UI/spiner/UISpiner.js";
import UIIndicators from "../../UI/indicators/UIIndicators.js";
import Repeat from "../../components/repeat/Repeat.js";
const Sprint = () => {
    const [state,setState] = useState<number>(0);
    const [level,setLevel] = useState('A1');
    const [score,setScore] = useState<number>(0);
    const blockRef = useRef<HTMLDivElement>(null);
    const [load,setLoad] = useState(true)
    const [gameWords,setGameWords] = useState<any>(null)
    const generator = getWord();
    const [num,setNum] = useState(0);
    const [result,setResult] = useState<any>([[],[]])
    useEffect(()=>{
        const  fetch = async () =>{
           
            setGameWords((await generator.next()).value);
                
        setLoad(false);
        }
        fetch();
    },[])

    const next = async () =>{
        setGameWords((await generator.next()).value);
    }
    const [lives,setLives] = useState<number>(3)
    const validFn = (valid:boolean):void =>{
        
        if(valid === gameWords.right){
            setScore(score+30)
            setNum(num + 1)
            result[0].push({en:gameWords.en,ru:gameWords.i});
        }
            
        
        else{
            if (blockRef.current) {
            blockRef.current.classList.add(`${styles.invalid}`);
            setTimeout(()=>{
                if (blockRef.current) 
                blockRef.current.classList.remove(`${styles.invalid}`);          
            },500)
        }
        result[1].push({en:gameWords.en,ru:gameWords.i});
           
            setLives(lives - 1)
            if(lives === 1)
            putGameToDB({right:result[0].length,wrong:result[1].length,dataGame:Date.now(),series:5},true);
        }
        next()
        
    }
    const resetGame = () =>{
        
        setScore(0)
        setLives(3)
        setState(0)
        setResult([[],[]])
    }
    
    
    const startGame = () =>{
        setTimeout(()=>{
            setState(2);
        },100000)
        setState(1)
        
    }
    
    
    if(state===0 || load) //Pick level
  return (
    <div className={styles.screen}>
        <div className={styles.sprint_start}>
            <img src="/images/10.png" alt="Sorry" />
            <div className={styles.sprint_main}>
                <h1 className={styles.sprint_main_title}>Sprint</h1>
                <h1 className={styles.sprint_main_teg}>speed task</h1>
            </div>
            <h1 className={styles.subtitle}>Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.</h1>
            <LevelPicker rePick={setLevel} state={level}/>
            {load
            ? <Spiner/>
            : <button onClick={()=>{startGame()}} className={styles.start}>Get started</button>
            }
            
        </div> 
       
    </div>
      
   
  )
  if(state==1 && lives!=0)//GAME
  return(
<div className={styles.screen}>
    <div ref={blockRef} className={styles.game_screen}> 
        <div  className={styles.circle}>
        <div className={styles.circle_fill} >
        </div>

            <div className={styles.scores}>
                <div className={styles.scores_gr}>
                    <h1 className={styles.scores_gr_title}>x2</h1>
                    <h1 className={styles.scores_gr_subtitle}>multiplier</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="34" viewBox="0 0 2 34" fill="none">
                    <path d="M1.40222 0.154724V33.0673" stroke="#E0E0E0" strokeWidth="0.822815"/>
                </svg>
                <div className={styles.scores_gr}>
                    <h1 className={`${styles.scores_gr_title} ${styles.anim_text}`}>{score}</h1>
                    <h1 className={styles.scores_gr_subtitle}>points</h1>
                </div>
            </div> 
            <div className={styles.game}>
                <div className={styles.game_lives}>
                    <h1 className={lives==3 ? `${styles.game_lives_item}` : `${styles.game_lives_item_empty}`}>✦</h1>
                    <h1 className={lives>=2 ? `${styles.game_lives_item}` : `${styles.game_lives_item_empty}`}>✦</h1>
                    <h1 className={lives>=1 ? `${styles.game_lives_item}` : `${styles.game_lives_item_empty}`}>✦</h1>
                </div>
                <h1 className={styles.game_pair_one}>{gameWords.en}</h1>
                <h1 className={styles.game_pair_two}>{gameWords.ru}</h1>
            </div>
            <div className={styles.btn}>
                
            </div>
        </div>
        <div className={styles.btns}>
        <div   onClick={()=>{validFn(true)}}  className={styles.btn_right}>Right</div>
                <div  onClick={()=>{validFn(false)}}  className={styles.btn_wrong}>Wrong</div>
                </div>
    </div>

</div>
)
return(
    <>
    <div className={styles.screen}>
         <div className={styles.result_screen}>
           
                <img src="/images/11.png" alt="Sorry" />
                <h1 className={styles.result_title}>Your Sprint</h1>
                <h1 className={styles.result_subtitle}>You did pretty good!</h1>
          
            <div className={styles.result_stat_gr}>
                <UIIndicators part={(num*10)/4} text={['40/',num.toString(),'words']}  color={"#639B6D"}/>
                <UIIndicators part={65} text={['retrieved',score.toString(),'points']}  color={"#2B788B"}/>
            </div>
            <div onClick={()=>{resetGame()}} className={styles.again_gr}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M8.54785 15C5.23785 15 2.54785 12.31 2.54785 9C2.54785 5.69 5.23785 3 8.54785 3V0L12.5479 4L8.54785 8V5C6.33785 5 4.54785 6.79 4.54785 9C4.54785 11.21 6.33785 13 8.54785 13C10.7579 13 12.5479 11.21 12.5479 9H14.5479C14.5479 12.31 11.8579 15 8.54785 15Z" fill="black"/>
            </svg>  
            <h1  className={styles.again_title}>Play it again</h1>
            </div>
            <h1 className={styles.go_text}>Go to textbook</h1>
         </div>
         
    </div>
    <Repeat know={result[0]} noKnow={result[1]}/>
    </>
)
};

export default Sprint;
