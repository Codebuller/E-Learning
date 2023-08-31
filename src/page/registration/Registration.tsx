import React, {useEffect, useState} from "react"
import styles from './Registration.module.css'
import {createUser,signInUser, database} from '../../helpers/firebase.js'
import {startSession} from '../../helpers/session.js'
import Spiner from "../../UI/spiner/UISpiner.js";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";

const Registration = () => {
  
  const nav = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(['','']);
  const [name,setName] = useState('');

  const [waiting,setWaiting] = useState(true)

  const validateEmail = (email:string):boolean => {
    return !!email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validName = (name:string):boolean =>{
    return !!name.match(/^[a-z ]+$/igm);
  }
  const submit = async (e:any) =>{
    e.preventDefault();
    setWaiting(false)

    try{
      if(!validateEmail(email))
      throw new Error('Not valid Email')
      if(password[0] !== password[1])
      throw new Error('Passwords are not equal')
      if(!validName(name))
      throw new Error('Not valid name')
      if(name.length < 3)
      throw new Error('Name consist of minimum 3 letter')
      if(password[0].length < 6)
      throw new Error('Name consist of minimum 6 letter')
      let response =  await createUser(email,password[0]);
      startSession(response.user, name);
      setWaiting(true)
      nav('/')
      
     
    }
    catch(error:any){
      setWaiting(true)
      console.log(error.message)
     }
    
   }
   set(ref(database,'user'+'555'),{
    username: 'Ваня',
    email:"text@mail.ru"
   })
  

  return ( 
    <div className={styles.screen}>
        <div className={styles.login}>
            <h1 className={styles.title}>Registration</h1>
            <form onSubmit={(e)=>{submit(e)}} className={styles.form_container} >
              <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Username" className={styles.form} />
              <input value={password[0]}  onChange={(e)=>{setPassword([e.target.value,password[1]])}} type="password" placeholder="Password" className={styles.form} />
              <input value={password[1]} onChange={(e)=>{setPassword([password[0],e.target.value])}} type="password" placeholder="Confirm Password" className={styles.form} />
              <input   value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className={styles.form} />
              <button className={styles.confirnBtn} type="submit">Registration</button>
            </form>
            
{/*             
            {waiting 
              ? <div onClick={()=>submit()} ></div>
              : <Spiner  />
              } */}

        </div>
    </div>
  )
};

export default Registration;
