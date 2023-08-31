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
  }
  
  export  function isLoggedIn() {
    return getSession().accessToken ?? false ;
  }