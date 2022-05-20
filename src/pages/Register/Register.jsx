import { useState } from 'react';
import './register.css';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';



function Register() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

 const handleRegister = async () => {
  await createUserWithEmailAndPassword(email,password);


   await sendEmailVerification();
    toast("Verification email sent");
 
    signOut(auth);
  

 }
 
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

            <button className="w-100 btn btn-lg btn-primary mb-3"onClick={handleRegister}>
             {
             loading ?
              <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span></div> : "Register"
             }
            </button>
            <Toaster></Toaster>
            
         

        </div>
  );
}

export default Register;