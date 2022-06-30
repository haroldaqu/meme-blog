import { Link, useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, provider } from '../login/firebase-config';
import { signInWithPopup } from 'firebase/auth';

const Links = ({ isAuth, setIsAuth }) => {

    const history = useHistory()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                history.push('/');
            })
    }

    const signUserOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.clear()
                setIsAuth(false)
                history.push('/login')
            }) 
    }


    return ( 
        <div className="links">
            { isAuth && <Link to="/">Home</Link> }
            { isAuth && <Link to="/topfeeds">Top</Link> }
            { isAuth && <Link to="/saved">Saved</Link> }
            { !isAuth ? <button onClick={ signInWithGoogle } >Sign In</button> : <button onClick={ signUserOut } >Sign Out</button> }
        </div>
     );
}
 
export default Links;