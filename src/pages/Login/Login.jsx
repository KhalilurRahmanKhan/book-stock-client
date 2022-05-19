import './login.css';

function Login() {
  return (
   <div className="container">
        <div className="login">
            <h3 className='text-center mb-3'>Login</h3>
            <div class="form-floating">
            <input type="email" class="form-control" name="email" />
            <label>Email</label>
            </div>
            
            <div class="form-floating">
            <input type="password" class="form-control" name="password"/>
            <label>Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Log In</button>

        </div>
   </div>
  );
}

export default Login;