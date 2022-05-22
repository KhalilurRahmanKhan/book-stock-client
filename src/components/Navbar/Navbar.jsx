import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import './navbar.css';

function Navbar() {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Book Stock</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>  
       {
         user &&
         <>
         <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='myitems'>My items</Link>
            </li> 
         <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/manage/inventory'>Manage items</Link>
            </li> 
         <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/manage/inventory/add/inventory'>Add item</Link>
            </li> 
            </>

       }
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='blogs'>Blogs</Link>
            </li>  
          </ul> 
         
        
        
        {
          user ? <button className="btn btn-outline-success"  onClick={logout}>Logout</button> :
          <>
          <Link className="btn btn-outline-primary" style={{margin:'5px',}} to="register">Register</Link>
          <Link className="btn btn-outline-success" to="login">Login</Link>
          </>
        }
        </div>
    </div>
    </nav>
 
  );
}

export default Navbar;