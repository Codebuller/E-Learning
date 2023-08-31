import React from "react"
import styles from './Redirect.module.css'
import UILogin from "../../UI/login/UILogin";
import UISignUp from "../../UI/signUp/UISignUp";
const Redirect = () => {
  return (
    
        <div className={styles.screen}>
            <div className={styles.login}>
                <div className={styles.login_welcome}>
                <img className={styles.login_welcome_image} src="/images/9.png" alt="Sorry, now not available" />
                <h1 className={styles.login_welcome_title}>Sorry, platform
not available 🥺</h1>
                <h1 className={styles.login_welcome_subtitle}>To use platform register or log in to your account</h1>
                </div>
                <div className={styles.login_log}>
                    <UILogin/>
                    <UISignUp/>
                </div>
            </div>
        </div>

  )
};

export default Redirect;
