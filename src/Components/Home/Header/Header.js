import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className='grenda'>
            <div>
            12356 Glassford Street <br></br> Glasgow New York, USA
            </div>
            <div>
                Office Hours: <br></br>
                9.00-5.00pm
            </div>
            <div>
                <em className='color'>Grenda</em> <br></br> <em className='ser'>Cetering Services</em>
            </div>
            <div>
                support <hr /> 1800 - 123 456 789
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
                    <em className='cat'>Catering</em>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;