import React from "react"
import styles from './About.module.css'
const About = () => {
  return (
    <>
    <div className={styles.screen}>
        <div className={styles.character}>
        <img src="/images/ivan.png" alt="Sorry" />
        <div className={styles.title}>
            <h1 className={styles.title_text}>Ivan</h1>
            <a href="https://github.com/Codebuller"><h1 className={styles.title_git}>github</h1></a>
        </div>
        <h1 className={styles.subtitle}>He did everything you see here, but he stole the design from Alex (handsome from below)</h1>
      </div>
      </div>
       <div className={styles.screen}>
      <div className={styles.character}>
        <img src="/images/alex.png" alt="Sorry" />
        <div className={styles.title}>
            <h1 className={styles.title_text}>Alex and comrades</h1>
            
        </div>
        <h1 className={styles.subtitle}>Made design.</h1>
      </div>
      
    </div>
    </>
  )
};

export default About;
