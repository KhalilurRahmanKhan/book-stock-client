import { useState } from 'react';
import './register.css';
import auth from '../../firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';



function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  function handleSendEmailVerification(){
    sendEmailVerification(auth.currentUser)
  .then(() => {
  
    toast("Email verification sent!");

  
  });
  }



 function handleRegister(){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;


    handleSendEmailVerification();
    setEmail('');
    setPassword('');

    if(user.emailVerified === true){
      navigate('/');
    }
    else{
      signOut(auth).then(() => {
          }).catch((error) => {
          });
    }

  })
  .catch((error) => {
    setError(error.message);

  
  });
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

      <button className="w-100 btn btn-lg btn-primary mb-3" onClick={handleRegister}>
      Register
      </button>
      <small className="text-danger">{error}</small>
      <Toaster></Toaster>



    </div>
  );
}

export default Register;