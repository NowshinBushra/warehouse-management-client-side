import React from 'react';
import google from '../../../image/google-logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      
      if (user) {
        
          navigate(from, { replace: true })
        
      }

    return (
        <div>
            <button onClick={() => {signInWithGoogle()}} type="button" className="btn btn-light border border-3 d-block mx-auto">
                <img style={{width: '25px'}} src={google} alt="" />
                <small className='px-2'>Google Sign In</small>
                </button>
        </div>
    );
};

export default Social;