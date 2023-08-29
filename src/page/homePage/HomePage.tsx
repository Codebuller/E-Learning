import React, { useEffect } from "react"
import styles from './HomePage.module.css'
import Footer from "../../components/footer/Footer";
const HomePage = () => {
        
        
        
  return (  
    <>   
        <div className={styles.mainView}>

       
            <div className={styles.welcome}>
                <h1 className={styles.welcome_uptitle}>E-COURSE PLATFORM</h1>
                <h1 className={styles.welcome_title}>Learning and
    teaching online,
    made easy.</h1>
                <h1 className={styles.welcome_subtitle}>Practice and learn new things with the platform.</h1>
            </div>

            <a className={styles.aboutBtn}>
                <h1 className={styles.aboutBtn_text}>About platform</h1>
            </a>
            <div className={styles.numbers}>
                <div className={styles.numbers_flex}>
                <div className={styles.numbers_item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M12.8779 0.145004C12.8585 0.101615 12.8269 0.0648056 12.7871 0.03906C12.7472 0.0133145 12.7007 -0.000255464 12.6532 3.64241e-06H5.69971C5.65795 7.33269e-05 5.61688 0.0106378 5.58025 0.0307292C5.54362 0.0508207 5.51261 0.0797969 5.49006 0.115004L0.143896 8.615C0.118158 8.65201 0.10312 8.69542 0.10044 8.74045C0.0977594 8.78547 0.10754 8.83037 0.128704 8.87018C0.149869 8.90999 0.181595 8.94318 0.220388 8.96609C0.25918 8.98899 0.303532 9.00073 0.348558 9H4.17723L0.797815 15.625C0.778413 15.6644 0.769294 15.7081 0.771309 15.752C0.773324 15.7958 0.786407 15.8385 0.809337 15.8759C0.832268 15.9134 0.864298 15.9444 0.902437 15.9661C0.940576 15.9878 0.983581 15.9995 1.02744 16H2.52496C2.5596 16.0002 2.59392 15.9932 2.62571 15.9795C2.65751 15.9657 2.6861 15.9454 2.70966 15.92L11.4802 6.425C11.515 6.38945 11.5384 6.3443 11.5474 6.29533C11.5565 6.24635 11.5507 6.1958 11.5309 6.15013C11.511 6.10447 11.478 6.06579 11.4361 6.03904C11.3941 6.01229 11.3452 5.9987 11.2955 6H7.93103L12.8379 0.410003C12.8696 0.374491 12.8902 0.330518 12.8973 0.283458C12.9044 0.236397 12.8976 0.188286 12.8779 0.145004Z" fill="#2B788B"/>
                    </svg>
                    <h1 className={styles.numbers_text}>600</h1>
                    <span className={styles.numbers_span}>+</span>
                </div>
                <h1 className={styles.numbers_subtitle}>Popular words</h1>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none">
                    <path d="M1 0V32" stroke="#E0E0E0"/>
                </svg>
                <div className={styles.numbers_flex}> 
                    <div className={styles.numbers_item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1.6746 1.71902C1.6746 1.27902 1.83113 0.902485 2.1442 0.589418C2.4578 0.275818 2.8346 0.119018 3.2746 0.119018L9.6746 0.119018C10.1146 0.119019 10.4911 0.275819 10.8042 0.589419C11.1178 0.902485 11.2746 1.27902 11.2746 1.71902L11.2746 14.519C11.2746 14.959 11.1178 15.3358 10.8042 15.6494C10.4911 15.9625 10.1146 16.119 9.6746 16.119L3.2746 16.119C2.8346 16.119 2.4578 15.9625 2.1442 15.6494C1.83113 15.3358 1.6746 14.959 1.6746 14.519L1.6746 1.71902ZM4.0746 4.91902C4.0746 5.14568 4.1514 5.33582 4.305 5.48942C4.45806 5.64249 4.64793 5.71902 4.8746 5.71902L5.6746 5.71902L5.6746 6.51902C5.6746 6.74568 5.7514 6.93582 5.905 7.08942C6.05806 7.24249 6.24793 7.31902 6.4746 7.31902C6.70126 7.31902 6.8914 7.24249 7.045 7.08942C7.19806 6.93582 7.2746 6.74568 7.2746 6.51902L7.2746 5.71902L8.0746 5.71902C8.30126 5.71902 8.4914 5.64249 8.645 5.48942C8.79806 5.33582 8.8746 5.14569 8.8746 4.91902C8.8746 4.69235 8.79806 4.50222 8.645 4.34862C8.4914 4.19555 8.30126 4.11902 8.0746 4.11902L7.2746 4.11902L7.2746 3.31902C7.2746 3.09235 7.19806 2.90222 7.045 2.74862C6.8914 2.59555 6.70126 2.51902 6.4746 2.51902C6.24793 2.51902 6.05806 2.59555 5.905 2.74862C5.7514 2.90222 5.6746 3.09235 5.6746 3.31902L5.6746 4.11902L4.8746 4.11902C4.64793 4.11902 4.45806 4.19555 4.305 4.34862C4.1514 4.50222 4.0746 4.69235 4.0746 4.91902ZM4.0746 10.119C4.0746 10.4524 4.1914 10.7356 4.425 10.9686C4.65806 11.2022 4.94126 11.319 5.2746 11.319C5.60793 11.319 5.89113 11.2022 6.1242 10.9686C6.3578 10.7356 6.4746 10.4524 6.4746 10.119C6.4746 9.78569 6.3578 9.50249 6.1242 9.26942C5.89113 9.03582 5.60793 8.91902 5.2746 8.91902C4.94126 8.91902 4.65806 9.03582 4.425 9.26942C4.1914 9.50248 4.0746 9.78569 4.0746 10.119ZM6.4746 12.519C6.4746 12.8524 6.5914 13.1356 6.825 13.3686C7.05806 13.6022 7.34126 13.719 7.6746 13.719C8.00793 13.719 8.29113 13.6022 8.5242 13.3686C8.7578 13.1356 8.8746 12.8524 8.8746 12.519C8.8746 12.1857 8.7578 11.9025 8.5242 11.6694C8.29113 11.4358 8.00793 11.319 7.6746 11.319C7.34126 11.319 7.05806 11.4358 6.825 11.6694C6.5914 11.9025 6.4746 12.1857 6.4746 12.519Z" fill="#2B788B"/>
                        </svg>
                        <h1 className={styles.numbers_text}>2</h1>
                        <span className={styles.numbers_span}>+</span>
                    </div>
                    <h1 className={styles.numbers_subtitle}>Mini-games</h1>
                </div>
            </div>
            <img className={styles.mainView_pic} src='/images/1.png' alt="Doesn't work"></img>
            </div>
            <div className={styles.play_View}>
            <img src='/images/2.png' alt="Doesn't work"></img>
            <div className={styles.twoWelcome}>
                <h1 className={styles.twoWelcome_title}>Learn a language in a playful way</h1>
                <h1 className={styles.twoWelcome_subtitle}>Make learning words more fun with mini-games</h1>
                <div className={styles.cards}>
                        <img src="/images/6.png" alt="Doesn't work" />  
                        <img src="/images/5.png" alt="Doesn't work" />
                </div>
            </div>
            <div className={styles.textBookScreen}>
                <div className={styles.book}>
                <h1 className={styles.book_title}>Increase your vocabulary</h1>
                <h1 className={styles.book_subtitle}>Traditional and new effective approaches to word study</h1>
                <button className={styles.book_btn}>
                    <h1 className={styles.book_btn_text} >Textbook →</h1>
                </button>
                <img className={styles.center_images} src="/images/7.png" alt="Doesn't work" />
                </div>
            </div>
            <div className={styles.statisticScreen}>
                <div className={styles.stat}>
                <img className={styles.center_images}  src="/images/8.png" alt="Doesn't work" />    
                    <h1 className={styles.stat_title}>Watch your progress every day</h1>
                    <h1 className={styles.stat_subtitle}>Save statistics on your achievements, words learned, and mistakes</h1>
                    <button className={styles.stat_btn}>
                        <h1 className={styles.stat_btn_text}>Statistics →</h1>
                    </button>
                </div> 

            </div>
        </div>
    </>
  )
};

export default HomePage;
