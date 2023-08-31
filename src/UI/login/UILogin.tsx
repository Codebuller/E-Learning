import React from "react"
import styles from './UILogin.module.css'
import { Link } from "react-router-dom";
const UILogin = () => {
  return (
    <Link to={'/login'}><h1 className={styles.text}>Log In →</h1></Link>
  )
};

export default UILogin;
