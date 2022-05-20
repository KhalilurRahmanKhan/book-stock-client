import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.config';

const RequireAuth = ({children}) => {
    let location = useLocation();

    const [user,loading] = useAuthState(auth);
  
    if (loading) {
      
      return <div className=' text-center m-5 '>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
      </div>;
    }
    if (!user) {
      
      return <Navigate to="/register" state={{ from: location }} replace />;
    }
  
    return children;
   
};

export default RequireAuth;