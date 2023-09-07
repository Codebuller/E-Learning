import React from "react"
import styles from './LevelPicker.module.css'
const LevelPicker = ({rePick,state}:{rePick:Function,state:string}) => {
  return (
    <>

    <h1 className={styles.choose_title}>Choose a level:</h1>
            <div className={styles.choose}> 
                <h1 onClick={()=>{rePick('A1')}} className={ state=='A1' ? `${styles.choose_a1} ${styles.choosen_a1}` : `${styles.choose_a1}`}>A1</h1>
                <h1 onClick={()=>{rePick('A2')}} className={ state=='A2' ? `${styles.choose_a2} ${styles.choosen_a2}` : `${styles.choose_a2}`}>A2</h1>
                <h1 onClick={()=>{rePick('B1')}} className={ state=='B1' ? `${styles.choose_b1} ${styles.choosen_b1}` : `${styles.choose_b1}`}>B1</h1>
                <h1 onClick={()=>{rePick('B2')}} className={ state=='B2' ? `${styles.choose_b2} ${styles.choosen_b2}` : `${styles.choose_b2}`}>B2</h1>
                <h1 onClick={()=>{rePick('C1')}} className={ state=='C1' ? `${styles.choose_c1} ${styles.choosen_c1}` : `${styles.choose_c1}`}>C1</h1>
                <h1 onClick={()=>{rePick('C2')}} className={ state=='C2' ? `${styles.choose_c2} ${styles.choosen_c2}` : `${styles.choose_c2}`}>C2</h1>
            </div>
    </>
  )
};

export default LevelPicker;
