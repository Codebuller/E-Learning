import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {isLoggedIn} from './helpers/session.js'
import { PrivateRoutes, PublicRoutes } from './router/Router.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {store} from './store.ts'
import App from './App.tsx';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
   
)
