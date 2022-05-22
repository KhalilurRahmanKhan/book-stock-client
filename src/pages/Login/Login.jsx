import './login.css';
import auth from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';



function Login() {
    
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

const from = location.state?.from?.pathname || '/';



    function handleLogin(){
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    if(userCredential.user.emailVerified === true){

      navigate(from,{replace:true});
    }
    else{
      signOut(auth).then(() => {
    }).catch((error) => {
    });
      setError('Email is not verified');
    }
  })
  .catch((error) => {
    setError(error.message);
  });

  setEmail('');
    setPassword('');
    }

    function handleGoogleLogin(){
      signInWithPopup(auth, provider)
      .then((result) => {  
        navigate(from,{replace:true});    
      }).catch((error) => {
        setError(error.message);
      });
     }
function handleResetPassword(){
  sendPasswordResetEmail(auth, email)
  .then(() => {

    toast("Password reset email sent!");
 
  })
  .catch((error) => {
  
    const errorMessage = error.message;
    setError(errorMessage);

  });
}
  
  return (
   <div className="container">
        <div className="login">
            <h3 className='text-center mb-3'>Login</h3>
            <div className="form-floating">
            <input className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
            </div>
            
            <div className="form-floating">
            <input className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary mb-3" onClick={handleLogin}>Login</button>
            <small className="text-danger">{error}</small>
            <button className="w-100 btn btn-lg btn-success mb-3"  onClick={handleGoogleLogin}>Login with Google</button>

            <div className="text-center">
            <button className='btn btn-link  btn-sm' onClick={handleResetPassword}><i>Reset Password</i></button>
            </div>

            <Toaster></Toaster>

        </div>
   </div>
  );
}

export default Login;