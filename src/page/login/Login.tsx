import React, { useState } from "react"
import styles from './Login.module.css'
const Login = () => {
  

  return (
    <div className={styles.screen}>
        <div className={styles.login}>
            <h1 className={styles.title}>Login</h1>
            <input type="text" placeholder="Username" className={styles.form} />
            <input type="password" placeholder="Password" className={styles.form} />
            <div className={styles.remember}>
                <input type="checkbox"/>
                <h1 className={styles.remember_text}>Remember Me</h1>
            </div>
            
            <a href='/' className={styles.confirnBtn}>Login</a>
        </div>
    </div>
  )
};

export default Login;
