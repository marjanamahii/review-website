import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="" />{' '}
                    Digital Marketing
                </Navbar.Brand>
                <Container>
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/test">Test takers</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;