import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();


    return (

      

        <>
        <div className='grenda'>
            <div>
            13/A, Panthopath
            <br></br> <em className='new'> Dhaka-1205.</em>
            </div>
            <div>
                Open Hours: <br></br>
                <em className='new'>24 hours</em>
            </div>
            <div>
                <em className='color'>Easy</em> <br></br> <em className='ser'>Cetering & Event Management </em>
            </div>
            <div className='new'>
                support <hr /> +880 1729645219
            </div>
            <div>
            <Button variant="success">Request a Quote</Button>
            </div>
        </div>
            <Navbar className="bg" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="https://media.istockphoto.com/vectors/catering-vector-badge-with-hand-written-modern-calligraphy-vector-id834259214?k=20&m=834259214&s=612x612&w=0&h=NTwHUa7hPaGYFLIpxH9iylfNmJQ80HPqDSeRLTtZQ0M="
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                    <em className='cat'>CEM</em>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav>
                            <NavDropdown
                            title="Catering Services"
                            >
                            <NavDropdown.Item href="#">Special Packages</NavDropdown.Item>
                            <NavDropdown.Item href="#">Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="#">Birthday</NavDropdown.Item>
                            <NavDropdown.Item href="#">Funeral</NavDropdown.Item>
                            <NavDropdown.Item href="#">Picnic</NavDropdown.Item>
                            <NavDropdown.Item href="#">Get Together</NavDropdown.Item>
                        
                            </NavDropdown>
                        </Nav>

                        {/* <Nav>
                            <NavDropdown
                            title="Event Management"
                            >
                            <NavDropdown.Item href="#">Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="#">Birthday</NavDropdown.Item>
                            <NavDropdown.Item href="#">Funeral</NavDropdown.Item>
                            <NavDropdown.Item href="#">Picnic</NavDropdown.Item>
                            <NavDropdown.Item href="#">Get Together</NavDropdown.Item>
                        
                            </NavDropdown>
                        </Nav> */}

                        <Nav.Link as={Link} to="/services">Services
                        
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {user.email?
                       <>
                        <Nav.Link as={Link} to="/home">{user.displayName}</Nav.Link>
                        <button className='btn' onClick={() => logOut()}>logout</button>
                       </>
                       :
                           <Nav.Link as={Link} to="/login">
                               <i class="fa-solid fa-right-to-bracket"></i>
                               Login</Nav.Link>
                       }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;