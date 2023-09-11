import React, { useState } from "react"
import styles from './Statistic.module.css'
import UIChart from "../../UI/chart/UIChart";
const Stastic = () => {
    const [interval,setInterval] = useState(true)
  return (
    <>
    <div className={styles.interval}>
    <h1 onClick={()=>setInterval(true)} className={interval ?`${styles.pick_inteval} ${styles.picked_inteval}`:`${styles.pick_inteval}`}>For the day</h1>
    <h1 onClick={()=>setInterval(false)} className={interval ?`${styles.pick_inteval}`:`${styles.pick_inteval} ${styles.picked_inteval}`}>For all the time</h1>
    </div>
    <div className={styles.screen}>
        <div className={styles.main_container}>
            <img src="/images/9.png" alt="Sorry" />
            <h1 className={styles.title}>{interval ?"Today's statistics" :"All-time statistics"}</h1>
            <h1 className={styles.sub_title}>Your statistics on all activities</h1>
            <div className={styles.indicators}>
                <div className={styles.indicator} >
                    <div className={styles.indicator_top}>
                        <h1 className={styles.indicator_num}>0</h1>
                        <span className={styles.indicator_num_another}>+</span>
                    </div>
                    <h1 className={styles.indicator_buttom}>words studied</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="33" viewBox="0 0 1 33" fill="none">
                    <path d="M0.5 0.933655V32.9337" stroke="#E0E0E0"/>
                </svg>
                <div className={styles.indicator} >
                    <div className={styles.indicator_top}>
                        <h1 className={styles.indicator_num}>0</h1>
                        <span className={styles.indicator_num_another}>%</span>
                    </div>
                    <h1 className={styles.indicator_buttom}>correct answers </h1>
                </div>
            </div>
            <div className={styles.game_container}>
                    <img src="/images/13.png" alt="Sorry" />
                    <div className={styles.right_container}>
                    <div className={styles.game_title}>
                        <h1 className={styles.game_title_text}>Sprint</h1>
                        <h1 className={styles.game_title_type}>speed task</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0</h1>
                        <h1 className={styles.right_stat_indicator_text}> words studied</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0%</h1>
                        <h1 className={styles.right_stat_indicator_text}> correct answers</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0</h1>
                        <h1 className={styles.right_stat_indicator_text}> best series of correct answers</h1>
                    </div>
                    </div>
            </div>
            <div className={styles.game_container}>
                    <img src="/images/14.png" alt="Sorry" />
                    <div className={styles.right_container}>
                    <div className={styles.game_title}>
                        <h1 className={styles.game_title_text}>Audio-Call</h1>
                        <h1 className={styles.game_title_type}>audition task</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0</h1>
                        <h1 className={styles.right_stat_indicator_text}> words studied</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0%</h1>
                        <h1 className={styles.right_stat_indicator_text}> correct answers</h1>
                    </div>
                    <div className={styles.right_stat_indicators}>
                        <h1 className={styles.right_stat_indicator}>0</h1>
                        <h1 className={styles.right_stat_indicator_text}> best series of correct answers</h1>
                    </div>
                    </div>
            </div>
        
        </div>
        <UIChart/>
    </div>
   
    </>
  )
};

export default Stastic;
