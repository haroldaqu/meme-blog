// import { auth, provider } from '../login/firebase-config';
// import { signInWithPopup } from 'firebase/auth';
// import { useHistory } from 'react-router-dom';

// const Login = ({ isAuth, setIsAuth }) => {

//     let history = useHistory();

//     const signInWithGoogle = () => {
//         signInWithPopup(auth, provider)
//             .then(result => {
//                 localStorage.setItem("isAuth", true);
//                 setIsAuth(true);
//                 history.push('/');
//             })
//     }


//     return ( 
//         <div className="login-page">
//             <h1>Login Page</h1>
//             <p>Sign in with Google to Continue</p>
//             <button className="login-btn" onClick={ signInWithGoogle } > Sign in</button>
//         </div>
//      );
// };
 
// export default Login;