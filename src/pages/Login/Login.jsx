import './login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


  const showError = () => toast(error.message);
  const sentEmail = () => toast("Email sent");

  if (error) {
    showError();
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

            <button className="w-100 btn btn-lg btn-primary mb-3" onClick={() => 
            signInWithEmailAndPassword(email, password)}>
             {
             loading ?
              <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span></div> : "Login"
             }
            </button>
            <button className="w-100 btn btn-lg btn-success mb-3"  onClick={() => 
            signInWithGoogle(email, password)}>Login with Google</button>

            <div className="text-center">
            <button className='btn btn-link  btn-sm' onClick={async () => {
                await sendPasswordResetEmail(email);
                sentEmail();
              }}><i>Reset Password</i></button>
            </div>

            <Toaster></Toaster>

        </div>
   </div>
  );
}

export default Login;