import React, { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import logo1 from '../images/logo.png';
import '../App.css';

export const NavBar = () => {
    const [expanded, setExpanded] = useState(false); 
    const handleNavbarToggle = () => setExpanded(!expanded);

    // Function to handle scrolling to sections based on the selected menu item
    const handleScroll = (target) => {
        window.location.hash = target;  // Update the hash to the target section
        setExpanded(false);  // Collapse the navbar on menu item click
    };

    return (
        <Navbar className="navcont fixed-top" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo1}
                        width="250"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link 
                            href="/#" 
                            className='navpaths nav-text' 
                            onClick={() => handleScroll('')}>Home</Nav.Link>
                        <Nav.Link 
                            href="/#about" 
                            className='navpaths' 
                            onClick={() => handleScroll('about')}>About Us</Nav.Link>
                        <Nav.Link 
                            href="/#mission" 
                            className='navpaths' 
                            onClick={() => handleScroll('mission')}>Mission & Vision</Nav.Link>
                        <Nav.Link 
                            href="/#services" 
                            className='navpaths' 
                            onClick={() => handleScroll('services')}>Services</Nav.Link>
                        <Nav.Link 
                            href="/#contact" 
                            className='navpaths' 
                            onClick={() => handleScroll('contact')}>Contact Us</Nav.Link>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="prim-button mx-2 me-lg-0" onClick={() => handleScroll('contact')}>Get Started</button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
