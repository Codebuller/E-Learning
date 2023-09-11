import React from 'react';
import Login from '../page/login/Login.tsx'
import Redirect from '../page/redirect/Redirect.tsx'
import Registration from '../page/registration/Registration.tsx'
import HomePage from '../page/homePage/HomePage.tsx'
import Sprint from '../page/sprint/Sprint.tsx'
import Navbar from '../components/navbar/Navbar.tsx';
import Footer from '../components/footer/Footer.tsx';
import Audio from '../page/audio/Audio.tsx';
import Stastic from '../page/statistic/Statistic.tsx';
export const PrivateRoutes = [
           { path:'/about',
            element: <HomePage/>,
        },
        { path:'/sprint',
            element: (<React.Fragment><Navbar/><Sprint/><Footer/></React.Fragment>),
        },
        { path:'/',
            element: (<React.Fragment><Navbar/> <HomePage/> <Footer/></React.Fragment>),
        },
        { path:'/sprint',
            element: (<React.Fragment><Navbar/><Sprint/><Footer/></React.Fragment>),
 },
 {  
    path:'/*',
    element: (<React.Fragment><Navbar/><Redirect/><Footer/></React.Fragment>)
},
 { path:'/audio',
            element: (<React.Fragment><Navbar/><Audio/><Footer/></React.Fragment>),
 },
 { path:'/statistic',
            element: (<React.Fragment><Navbar/><Stastic/><Footer/></React.Fragment>),
 },
        ]
export const PublicRoutes =  [
    { path:'/',
     element: <React.Fragment><Navbar/> <HomePage/> <Footer/></React.Fragment>,
 },
 { path:'/login',
     element: <React.Fragment><Login/><Footer/></React.Fragment>,
 },
 { path:'/redirect',
     element: <Redirect/>,
 },
 { path:'/reg',
     element: <Registration/>,
 },
 {  
    path:'*',
    element: (<React.Fragment><Navbar/><Redirect/><Footer/></React.Fragment>)
},
 ]
     
        
