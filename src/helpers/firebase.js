import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCa_NRq0IAKKWTtHhI7qJDpAqJZl1JOvvw",
    authDomain: "e-learning-38c3d.firebaseapp.com",
    databaseURL: "https://e-learning-38c3d-default-rtdb.firebaseio.com",
    projectId: "e-learning-38c3d",
    storageBucket: "e-learning-38c3d.appspot.com",
    messagingSenderId: "1063563485812",
    appId: "1:1063563485812:web:2d32ed0d5fb4f490cae721"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);
  export const createUser = async (email, password) => {
    // set(ref(database,user))
    return createUserWithEmailAndPassword(getAuth(app), email, password);
    
  }
  export const signInUser = async (email, password) => {
    return await signInWithEmailAndPassword(getAuth(app), email, password);
  }