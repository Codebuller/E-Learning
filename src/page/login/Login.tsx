import React, { useState } from "react"
import styles from './Login.module.css'
import { signInUser} from '../../helpers/firebase.js'
import { startSession } from "../../helpers/session.js";
import Spiner from "../../UI/spiner/UISpiner.js";
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux'
const Login = () => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [waiting,setWaiting] = useState<boolean>(true);
  const validateEmail = (email:string):boolean => {
    return !!email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const submit = async (e:any) =>{
    e.preventDefault();

    setWaiting(false);
    try{
      if(!validateEmail(email))
      throw new Error('Not valid Email')
      if(password.length < 6)
      throw new Error('Name consist of minimum 6 letter')
      let response:any = (await signInUser(email,password)).user;
      startSession(response ,'ivan');//Получение из бд должно быть
      
      setWaiting(true)
      dispatch({type:'LOGIN'})
      nav('/')
    }
    catch(e){
      console.log(e)
      setWaiting(true);
    }
  }

  return (
    <div className={styles.screen}>
        <div className={styles.login}>
            <h1 className={styles.title}>Login</h1>
            <form  onSubmit={(e)=>{submit(e)}} className={styles.form_container} >
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className={styles.form} />
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className={styles.form} />
              <div className={styles.remember_me}>
              <input type="checkbox"/>
              <h1 className={styles.remember_me_text}>Remember me</h1>
              </div>
              {waiting
              ? <button type="submit" className={styles.confirnBtn}>Login</button>
              : <Spiner/>
              }
              
            </form>
           
        </div>
    </div>
  )
};

export default Login;
