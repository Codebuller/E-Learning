import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { PrivateRoutes, PublicRoutes } from './router/Router';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Redirect } from 'react-router';
function App() {
  
  const auth:boolean = useSelector((state:any)=>state.auth)
  const router = createBrowserRouter(
    auth ?PrivateRoutes   :  PublicRoutes
  );
  useEffect(() => {
    
  }, [auth]);

  
     

  return ( 
    <>
    <React.Fragment>
      <RouterProvider router={router}/>
      
    </React.Fragment>
    </>
  )
}

export default App
