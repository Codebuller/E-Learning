import { useNavigate } from "react-router-dom";
export const startSession = (user,name) => {
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("accessToken", user.accessToken);
    sessionStorage.setItem('UID',user.uid);
  }
  
  export const getSession = () => {
    return {
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
      accessToken: sessionStorage.getItem("accessToken"),
      UID: sessionStorage.getItem("UID"),
    }
  }
  
  export const endSession = () => {
    sessionStorage.clear();
    const nav = useNavigate();
    nav('/')
  }
  
  export const isLoggedIn = () => {
    return getSession().accessToken ?? false ;
  }
  