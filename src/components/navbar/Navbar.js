import './Navbar.css'
import Links from './Links';
import SideProfile from './SideProfile';

const Navbar = ({ isAuth, setIsAuth }) => {


    return ( 
        <nav className='nav-bar'>
            <SideProfile isAuth={ isAuth }/>
            <Links 
                isAuth={ isAuth } 
                setIsAuth={ setIsAuth }
            />
        </nav>
     );
}
 
export default Navbar;