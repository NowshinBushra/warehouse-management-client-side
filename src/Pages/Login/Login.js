import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    const navigateSignup = event => {
        navigate('/signup');
    }
    return (
        <div className='login-container w-25 mx-auto'>
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
                
                <Button variant="primary w-2/5 mx-auto d-block mb-4 w-sm-50" type="submit">Login</Button>
            </Form>
            {/* <p>Forgot Your Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> */}
            <p>Don't have an account? <Link to='/signup' className='text-danger pe-auto text-decoration-none' onClick={navigateSignup}>Please Sign Up</Link> </p>
        </div>
    );
};

export default Login;