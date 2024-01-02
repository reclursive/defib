import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom"

import Dashboard from './pages/user/dashboard'
import Login from './pages/global/login'
import Signup from './pages/global/signup'
import Saved from './pages/user/saved'
import Publications from './pages/user/publications'
import Home from './pages/global/home'
import About from './pages/global/about'


//going to change to create routes from elements non protected
const Protected = () => {
  // const location = useLocation();
  const { isAuth } = false;

  if (isAuth === undefined) {
    return null; 
  }
//including a replace state later
  return isAuth
    ? <Outlet />
    : <Navigate to="/login"/>;
}

const routes = [
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
    path: "/about",
    element: <About />,
  },

  {
    element: <Protected />,
    children: [
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


    ]
  }

]

const router = createBrowserRouter(routes);


const App = () =>{
  return <RouterProvider router={router} />;
}

export default App