import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Social from './Social/Social';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: Your password or email didn't match</p>
      }

    if(loading){
        return <Loading></Loading>;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateSignup = event => {
        navigate('/signup');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
            if(email){
                await sendPasswordResetEmail(email);
            toast('Sent email to reset your password');
            }
            else{
                toast('please enter your email address');
            }
          
    }
    return (
        <div className='login-container w-50 mx-auto'>
            <h2 className='text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary w-2/5 mx-auto d-block mb-4" type="submit">Login</Button>
            </Form>
            {errorElement}
            <p>Forgot Your Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <p>Don't have an account? <Link to='/signup' className='text-info pe-auto text-decoration-none' onClick={navigateSignup}>Please Sign Up</Link> </p>
            <Social></Social>
            <ToastContainer/>
        </div>
    );
};

export default Login;