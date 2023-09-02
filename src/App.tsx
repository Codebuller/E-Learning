import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './page/homePage/HomePage'
import { PrivateRoutes, PublicRoutes } from './router/Router';
import { useSelector ,useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const auth:boolean = useSelector(state=>state.auth)
  const router = createBrowserRouter(
    auth ?PrivateRoutes   :  PublicRoutes
  );
  
     

  return ( 
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
