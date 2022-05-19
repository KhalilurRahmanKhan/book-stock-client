import { useState } from 'react';
import './register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';



function Register() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const showError = () => toast(error.message);

  if (error) {
    showError();
  }
  return (
        <div className="register">
         
            <h3 className='text-center mb-3'>Register</h3>
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

            <button className="w-100 btn btn-lg btn-primary mb-3"onClick={() => createUserWithEmailAndPassword(email, password)}>
             {
             loading ?
              <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span></div> : "Register"
             }
            </button>
            <Toaster></Toaster>
            
         

        </div>
  );
}

export default Register;