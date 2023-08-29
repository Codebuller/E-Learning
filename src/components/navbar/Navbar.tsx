import React, { useState } from "react"
import styles from './Navber.module.css'
const Navbar = () => {
    const [visMenu,setVisMenu] = useState(true);
    const navMenu = (event:any):void =>{
        setVisMenu(!visMenu);
    }
  return ( 
    <>
    <header>
        <div className={styles.navbar}>
        <svg style={visMenu ? {display:'block'} : {display:'none'}} onClick={(event)=>{navMenu(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 7L22 7" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
            <path d="M2 12.5L16 12.5" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
            <path d="M2 18L8 18" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
        </svg>
        <svg style={visMenu ? {display:'none'} : {display:'block'}} onClick={(event)=>{navMenu(event)}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5.42462 5.85938L18.5754 19.0101" stroke="black" strokeWidth="1.4"/>
            <path d="M5.42462 19.1406L18.5754 5.98987" stroke="black" strokeWidth="1.4"/>
        </svg>
        <h1 className={styles.navbar_text}>GlobalTalk</h1>    
        <div className={styles.navbar_acount}>
            <div className={styles.navbar_acount_avatar} >
                <h1 className={styles.navbar_acount_avatar_text}>A</h1>
            </div>
            <h1 className={styles.navbar_acount_name}>Alex</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.76459 6.60889L7.22676 10.0713L10.6891 6.60889" stroke="#757575" strokeWidth="1.6"/>
            </svg>
        </div>
        </div>
        <ul style={visMenu ? {display:'none'} : {display:'block'}} className={styles.pop_up_menu}>
        <li className={styles.menu_item}>Main</li>
        <li className={styles.menu_item}>Textbook</li>
        <li className={styles.menu_item}>Statistics</li>
        <li className={styles.menu_item}>Sprint</li>
        <li className={styles.menu_item}>Audio-call</li>
    </ul>
    </header>
    
    </>
  )
};

export default Navbar;
