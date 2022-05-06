import React from 'react';
import google from '../../../image/google-logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>

    }
    
    if(loading){
        return <Loading></Loading>;
    }
    if (user) {

        navigate(from, { replace: true })

    }

    return (
        <div>
            {errorElement}
            <div>
                <button onClick={() => { signInWithGoogle() }} type="button" className="btn btn-light border border-3 d-block mx-auto">
                    <img style={{ width: '25px' }} src={google} alt="" />
                    <small className='px-2'>Google Sign In</small>
                </button>
            </div>
        </div>

    );
};

export default Social;