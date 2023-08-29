import React, {useEffect, useState} from "react"
import styles from './Registration.module.css'
import {createUser,signInUser} from '../../helpers/firebase.js'
import {startSession} from '../../helpers/session.js'
import Spiner from "../../UI/spiner/Spiner.js";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  
  const nav = useNavigate();
  const [email,setEmail] = useState('');
  const [waiting,setWaiting] = useState(true)
  const [password,setPassword] = useState('');
  const submit = async () =>{
    setWaiting(false)
    try{
      let response =  await createUser(email,password);
      startSession(response.user);
      setWaiting(true)
        nav('/')
     
     
    }
    catch(error){
      setWaiting(true)
      throw new Error(error)
      
     }
    
   }
  
  return ( 
    <div className={styles.screen}>
        <div className={styles.login}>
            <h1 className={styles.title}>Registration</h1>
            <input type="text" placeholder="Username" className={styles.form} />
            <input type="password" placeholder="Password" className={styles.form} />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Confirm Password" className={styles.form} />
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className={styles.form} />
            
            {waiting 
              ? <div onClick={()=>submit()} href='/' className={styles.confirnBtn}>Registration</div>
              : <Spiner  />
              }

        </div>
    </div>
  )
};

export default Registration;
