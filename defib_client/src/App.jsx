import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom"

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
  },
  {
    //protected
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    //protected
    path: "/publications",
    element: <Publications />,
  },
  {
    //protected, CRUD...
    path: "/saved",
    element: <Saved />,
  }


])

const App = () =>{
  return ( 
   <div className= "App">
    <RouterProvider router={router}/>
   </div>

  )
}

export default App