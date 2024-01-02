//useeffect for infinite scroll and dynamic refresh for signed in capabilities 
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>
                Home page...
            </h1>
        <ul>
            <li>
            <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
            <NavLink to="/signup">Sign up</NavLink>
            </li>
            <li>
            <NavLink to="/about">About Defib</NavLink> 
            </li>
        </ul>
        </div>
    )
}

export default Home