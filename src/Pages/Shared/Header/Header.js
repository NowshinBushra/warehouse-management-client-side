import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/vehico-mart-logo.png';
import Loading from '../Loading/Loading';
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
                                    <>
                                        <Nav.Link as={Link} to="manage">Manage Listing</Nav.Link>
                                        <Nav.Link as={Link} to="add">Add Listing</Nav.Link>
                                        <Nav.Link as={Link} to="mylist">My Listing</Nav.Link>
                                        <button className='btn btn-secondary rounded-pill text-white text-decoration-none ms-2' onClick={handleLogout}>Logout</button>
                                    </> 
                                    
                                : 
                                <Nav.Link className='btn btn-secondary rounded-pill text-white px-4' as={Link} to="login">Login</Nav.Link>
                            } 

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;