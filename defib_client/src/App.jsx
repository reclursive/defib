import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom"

import Dashboard from './pages/user/dashboard'
import Login from './pages/user/login'
import Signup from './pages/user/signup'
import Saved from './pages/user/saved'
import Publications from './pages/user/publications'
import Home from './pages/global/home'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
])



const private_router = createBrowserRouter([
  {
    isAuth: false,
    //protected
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    //protected
    isAuth: false,
    path: "/publications",
    element: <Publications />,
  },
  {
    //protected, CRUD...
    isAuth: false,
    path: "/saved",
    element: <Saved />,
  }


])


const App = () =>{
  return ( 
   <div className= "App">
    <RouterProvider router={router}/>
    <RouterProvider router={private_router}/>
   </div>

  )
}

export default App