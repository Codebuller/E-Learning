import Login from '../page/login/Login.tsx'
import React from 'react';
import Redirect from '../page/redirect/Redirect.tsx'
import Registration from '../page/registration/Registration.tsx'
import HomePage from '../page/homePage/HomePage.tsx'
import { Route, Router, Routes } from 'react-router-dom';
import Sprint from '../page/sprint/Sprint.tsx'
import Navbar from '../components/navbar/Navbar.tsx';
import Footer from '../components/footer/Footer.tsx';
export const PrivateRoutes = [
           { path:'/about',
            element: <HomePage/>,
        },
        { path:'/sprint',
            element: <Sprint/>,
        },
        { path:'/',
            element: (<React.Fragment><Navbar/> <HomePage/> <Footer/></React.Fragment>),
        },
        ]
export const PublicRoutes =  [
    { path:'/',
     element: <Redirect/>,
 },
 { path:'/login',
     element: <Login/>,
 },
 { path:'/redirect',
     element: <Redirect/>,
 },
 { path:'/reg',
     element: <Registration/>,
 },
 ]
     
        
