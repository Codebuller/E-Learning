import React, { useState } from "react"
import styles from './Sprint.module.css'
const Sprint = () => {
    const [state,setState] = useState<number>(3);
    const [level,setLevel] = useState('A1');
    const startGame = () =>{
        setTimeout(()=>{
            setState(2);
        },100000)
        setState(1)
    }
    if(state===0) //Pick level
  return (
    <div className={styles.screen}>
        <div className={styles.sprint_start }>
            <img src="/images/10.png" alt="Sorry" />
            <div className={styles.sprint_main}>
                <h1 className={styles.sprint_main_title}>Sprint</h1>
                <h1 className={styles.sprint_main_teg}>speed task</h1>
            </div>
            <h1 className={styles.subtitle}>Trains the skill of fast translation. You have to choose if the translation corresponds to the suggested word.</h1>
            <h1 className={styles.choose_title}>Choose a level:</h1>
            <div className={styles.choose}> 
                <h1 onClick={()=>{setLevel('A1')}} className={ level=='A1' ? `${styles.choose_a1} ${styles.choosen_a1}` : `${styles.choose_a1}`}>A1</h1>
                <h1 onClick={()=>{setLevel('A2')}} className={ level=='A2' ? `${styles.choose_a2} ${styles.choosen_a2}` : `${styles.choose_a2}`}>A2</h1>
                <h1 onClick={()=>{setLevel('B1')}} className={ level=='B1' ? `${styles.choose_b1} ${styles.choosen_b1}` : `${styles.choose_b1}`}>B1</h1>
                <h1 onClick={()=>{setLevel('B2')}} className={ level=='B2' ? `${styles.choose_b2} ${styles.choosen_b2}` : `${styles.choose_b2}`}>B2</h1>
                <h1 onClick={()=>{setLevel('C1')}} className={ level=='C1' ? `${styles.choose_c1} ${styles.choosen_c1}` : `${styles.choose_c1}`}>C1</h1>
                <h1 onClick={()=>{setLevel('C2')}} className={ level=='C2' ? `${styles.choose_c2} ${styles.choosen_c2}` : `${styles.choose_c2}`}>C2</h1>
            </div>
            <button onClick={()=>{startGame()}} className={styles.start}>Get started</button>
        </div> 
    </div>
      
   
  )
  if(state==1)//GAME
  return(
<div className={styles.screen}>
    <div className={styles.game_screen}>
        <div className={styles.circle}>
        <div className={styles.circle_fill} >
        </div>

            <div className={styles.scores}>
                <div className={styles.scores_gr}>
                    <h1 className={styles.scores_gr_title}>x2</h1>
                    <h1 className={styles.scores_gr_subtitle}>multiplier</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="34" viewBox="0 0 2 34" fill="none">
                    <path d="M1.40222 0.154724V33.0673" stroke="#E0E0E0" stroke-width="0.822815"/>
                </svg>
                <div className={styles.scores_gr}>
                    <h1 className={styles.scores_gr_title}>30</h1>
                    <h1 className={styles.scores_gr_subtitle}>points</h1>
                </div>
            </div> 
            <div className={styles.game}>
                <div className={styles.game_lives}>
                    <h1 className={styles.game_lives_item}>✦</h1>
                    <h1 className={styles.game_lives_item}>✦</h1>
                    <h1 className={styles.game_lives_item}>✦</h1>
                </div>
                <h1 className={styles.game_pair_one}>negative</h1>
                <h1 className={styles.game_pair_two}>perdre</h1>
            </div>
            <div className={styles.btn}>
                <button className={styles.btn_right}>Right</button>
                <button className={styles.btn_wrong}>Wrong</button>
            </div>
        </div>
    </div>

</div>
)
return(
    <div className={styles.screen}>
         <div className={styles.result_screen}>
           
                <img src="/images/11.png" alt="Sorry" />
                <h1 className={styles.result_title}>Your Sprint</h1>
                <h1 className={styles.result_subtitle}>You did pretty good!</h1>
          
            <div className={styles.result_stat_gr}>
                <div className={styles.param_one}>
                    <h1 className={styles.param_topTitle}>retrieved</h1>
                    <h1 className={styles.param_title}>240</h1>
                    <h1 className={styles.param_subTitle}>points</h1>
                </div>
                <div className={styles.param_two}>
                    <h1 className={styles.param_topTitle}>40/</h1>
                    <h1 className={styles.param_title}>30</h1>
                    <h1 className={styles.param_subTitle}>words</h1>
                </div>
            </div>
            <div className={styles.again_gr}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M8.54785 15C5.23785 15 2.54785 12.31 2.54785 9C2.54785 5.69 5.23785 3 8.54785 3V0L12.5479 4L8.54785 8V5C6.33785 5 4.54785 6.79 4.54785 9C4.54785 11.21 6.33785 13 8.54785 13C10.7579 13 12.5479 11.21 12.5479 9H14.5479C14.5479 12.31 11.8579 15 8.54785 15Z" fill="black"/>
            </svg>  
            <h1 className={styles.again_title}>Play it again</h1>
            </div>
            <h1 className={styles.go_text}>Go to textbook</h1>
         </div>
    </div>
)
};

export default Sprint;
