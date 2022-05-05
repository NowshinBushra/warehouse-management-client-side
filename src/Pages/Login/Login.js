import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='login-container w-50 mx-auto'>
            <h2 className='text-center mt-5'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary w-2/5 mx-auto d-block mb-4 w-sm-50" type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;