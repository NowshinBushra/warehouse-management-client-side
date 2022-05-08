import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate(from, { replace: true });
        
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: check your email address</p>
    }

    if(loading){
        return <Loading></Loading>;
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='login-container w-50 mx-auto'>
            <h2 className='text-center mt-5'>Please Sign Up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary w-2/5 mx-auto d-block mb-4 w-sm-50" type="submit">Sign Up</Button>
            </Form>
            {errorElement}
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <Social></Social><br /><br /><br /><br />
        </div>
    );
};

export default SignUp;