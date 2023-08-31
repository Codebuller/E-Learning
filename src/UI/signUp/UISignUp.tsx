import React from "react"
import styles from './UISignUp.module.css'
import { Link } from "react-router-dom";
const UISignUp = () => {
  return (
    <Link to={'/reg'}>
    <h1 className={styles.container} >
      Sign Up
    </h1>
    </Link>
  )
};

export default UISignUp;
