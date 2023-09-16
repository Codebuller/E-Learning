import React, { useState,useEffect } from "react"
import styles from './Navber.module.css'
import {endSession, isLoggedIn} from './../../helpers/session.ts'
import { useDispatch } from "react-redux";
import UILogin from "../../UI/login/UILogin.tsx";
import UISignUp from "../../UI/signUp/UISignUp.tsx";
import { Link } from "react-router-dom";
const Navbar = () => {
    
    const [visMenu,setVisMenu] = useState<boolean>(true);
    const [visAcc,setVisAcc] = useState<boolean>(true);
    const name:string = sessionStorage.getItem('name') ?? ' ' ;
    const logOut = () =>{
        useDispatch()({type:'LOGOUT'})
        endSession()
        setVisMenu(!visMenu);
    }
    useEffect(()=>{
        if(!visMenu)
        document.body.style.overflow  = 'hidden'
        else{
        document.body.style.overflow  = 'visible'  
        }
        
    },[visMenu])
    

  return ( 
    <>
    <header>
        <div className={styles.navbar}>
        <svg style={visMenu ? {display:'block'} : {display:'none'}} onClick={()=>{setVisMenu(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 7L22 7" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
            <path d="M2 12.5L16 12.5" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
            <path d="M2 18L8 18" stroke="black" strokeWidth="1.4" strokeLinecap="square"/>
        </svg>
        <svg style={visMenu ? {display:'none'} : {display:'block'}} onClick={()=>{setVisMenu(true)}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5.42462 5.85938L18.5754 19.0101" stroke="black" strokeWidth="1.4"/>
            <path d="M5.42462 19.1406L18.5754 5.98987" stroke="black" strokeWidth="1.4"/>
        </svg>
        <h1 className={styles.navbar_text}><Link to={'/'}>GlobalTalk</Link></h1> 
        {name!=' '
        ?<div className={styles.navbar_acount}>
            
        <div className={styles.navbar_acount_avatar} >
            <h1 className={styles.navbar_acount_avatar_text}>{name[0]}</h1>
        </div>
        <h1 className={styles.navbar_acount_name}>{name}</h1>
        <svg onClick={()=>{setVisAcc(!visAcc)}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.76459 6.60889L7.22676 10.0713L10.6891 6.60889" stroke="#757575" strokeWidth="1.6"/>
        </svg>
           
    </div>
        :<svg className={styles.non_acc_nav} onClick={()=>{setVisAcc(!visAcc)}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.76459 6.60889L7.22676 10.0713L10.6891 6.60889" stroke="#757575" strokeWidth="1.6"/>
        </svg>

        }   
        
        </div>
        <ul style={visMenu ? {display:'none'} : {display:'flex'}} className={styles.pop_up_menu}>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/'}>Main</Link></li>
            <li className={styles.menu_item}>Textbook</li>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/statistic'}>Statistics</Link></li>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/sprint'}>Sprint</Link></li>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/audio'}>Audio-call</Link></li>
            {!isLoggedIn() &&
            <React.Fragment>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/login'}>Login</Link></li>
            <li onClick={()=>{setVisMenu(true)}} className={styles.menu_item}><Link to={'/reg'}>Registration</Link></li>
            </React.Fragment>
        }
        </ul>
        <ul style={visAcc ? {display:'none'} : {display:'flex'}} className={styles.nav_acc}>
        {!!isLoggedIn()
        ?<li onClick={()=>{setVisAcc(true);logOut(); }} className={styles.nav_acc_item}>Выход</li>
        : <React.Fragment>
        <li className={styles.nav_acc_item}><UILogin/></li>
        <li className={styles.nav_acc_item}><UISignUp/></li>
        </React.Fragment>
        }   
        </ul>

    </header>
    
    </>
  )
};

export default Navbar;
