import React from "react"
import styles from './Registration.module.css'
const Registration = () => {
  return (
    <div className={styles.screen}>
        <div className={styles.login}>
            <h1 className={styles.title}>Registration</h1>
            <input type="text" placeholder="Username" className={styles.form} />
            <input type="password" placeholder="Password" className={styles.form} />
            <input type="password" placeholder="Confirm Password" className={styles.form} />
            <input type="email" placeholder="Email" className={styles.form} />
            <a href='/' className={styles.confirnBtn}>Registration</a>
        </div>
    </div>
  )
};

export default Registration;
