import React from "react"
import styles from './Repeat.module.css'
import { Word } from "../../helpers/firebase";
import UIPlayer from "../../UI/player/UIPlayer";

const Repeat = ({know,noKnow}:{know:Word[],noKnow:Word[]}) => {
  return (
    <div className={styles.container}>
        {
        know.length>0 && 
        <React.Fragment>
        <div className={styles.title}>
            <h1 className={styles.title_text}>I know</h1>
            <h1 className={styles.title_coll}>{`${know.length} words`}</h1>
        </div>
         
        <ul className={styles.words}>
            {know.map((el)=>
            <li key={el.en+'know'+Math.floor(Math.random()*1000).toString()} className={styles.word} >
                <UIPlayer word={el.en} />
                <div className={styles.word_text}>
                    <h1 className={styles.word_en}>{el.en}</h1>
                    <h1 className={styles.word_ru}>{'- ' + el.ru}</h1>    
                </div>  
                
            </li>
            )}
        </ul>
        </React.Fragment>}
        <div className={styles.title_wrong}>
            <h1 className={styles.title_text}>I don't know</h1>
            <h1 className={styles.title_coll_wrong}>{`${noKnow.length} words`}</h1>
        </div>
        <ul className={styles.words}>
            {noKnow.map((el)=>
            <li key={el.en+'noKnow'+Math.floor(Math.random()*1000).toString()} className={styles.word} >
                <UIPlayer word={el.en} />
                <div className={styles.word_text}>
                    <h1 className={styles.word_en}>{el.en}</h1>
                    <h1 className={styles.word_ru}>{'- ' + el.ru}</h1>    
                </div>  
                
            </li>
            )}
        </ul>

    </div>
  )
};

export default Repeat;
