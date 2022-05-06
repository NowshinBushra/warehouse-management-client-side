import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/vehico-mart-logo.png';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{background: "rgb(77 23 80)"}} sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='rounded-pill' src={logo} height='80' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                    <Nav>
                              {
                                user ? 
                                    <button className='btn btn-secondary rounded-pill text-white text-decoration-none' onClick={handleLogout}>Logout</button>
                                : 
                                <Nav.Link className='btn btn-secondary rounded text-white' as={Link} to="login">Login</Nav.Link>
                            } 

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;