import { Link } from 'react-router-dom'
import './Navbar.css'
import Links from './Links';
import SideProfile from './SideProfile';

const Navbar = () => {
    return ( 
        <nav className='nav-bar'>
            <SideProfile />
            <Links />
        </nav>
     );
}
 
export default Navbar;