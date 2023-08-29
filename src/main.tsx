import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './page/homePage/HomePage.tsx';
import Footer from './components/footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import { Provider } from 'react-redux';


import { createStore } from 'redux';
import Redirect from './page/redirect/Redirect.tsx';
import Login from './page/login/Login.tsx';
import Registration from './page/registration/Registration.tsx';
import Sprint from './page/sprint/Sprint.tsx';

// const store = createStore(reducer);

// function reducer(state, action) {
//   switch(action.type) {
//       case ACTION_1: return { value: action.value_1 };
//       case ACTION_2: return { value: action.value_2 };
      
//       default: return state;
//   }
// }




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar/>
      <HomePage/>
      <Footer/>
      </>
    ),
  },
  {
    path: "redirect",
    element: (
      <>
      <Navbar/>
      <Redirect/>
      <Footer/>
      </>
      ),
  },
  {
    path: "login",
    element: (
      <>
      <Login/>
      </>
      ),
  },
  {
    path: "registration",
    element: (
      
      <Registration/>
      
      ),
  },
  {
    path: "sprint",
    element: (
      <>
      <Navbar/>
      <Sprint/>
      <Footer/>
      </>
     
      
      ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <React.StrictMode>
    
     <RouterProvider router={router} />
    
  </React.StrictMode>
  // </Provider>
)
