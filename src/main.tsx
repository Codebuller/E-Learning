import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {isLoggedIn} from './helpers/session.js'
import { PrivateRoutes, PublicRoutes } from './router/Router.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  isLoggedIn() ? PrivateRoutes : PublicRoutes

  
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  // </Provider>
)
