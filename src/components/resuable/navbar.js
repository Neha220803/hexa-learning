import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form, Toast } from 'react-bootstrap';
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../images/logo.svg';
import '../../index.css';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const [expanded, setExpanded] = useState(false); 
    const handleNavbarToggle = () => setExpanded(!expanded);

    return (
        <Navbar className="navcont fixed-top" bg="dark" variant="dark"  expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        // width="40"
                        // height="40"
                        className="d-inline-block align-top"
                    />
                    {/* <span className='ms-3 nav-head d-none d-lg-inline'>PATNA JESUIT SOCIETY YOUTH MINISTRY</span>
                    <span className='ms-3 nav-head d-lg-none'>PJSYM</span> Display this on small screens */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {/* <Nav.Link href="/" className='navpaths nav-text'>Home</Nav.Link> */}
                        {/* <Nav.Link href="/#about" className='navpaths'>About Us</Nav.Link> */}
                        {/* <Nav.Link href="/#programs" className='navpaths'>Programs</Nav.Link> */}
                        {/* <Nav.Link href="/#heros" className='navpaths'>Heroes</Nav.Link> */}
                        {/* <Nav.Link href="/#gallery" className='navpaths'>Gallery</Nav.Link> */}
                        {/* <Nav.Link href="#!" className='navpaths' onClick={() => setLgShow(true)}>Contact Us</Nav.Link> */}
                        <button className="btn btn-transparent text-white  " onClick={() => { navigate('/'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>Home</div>
                        </button>
                        <button className="btn btn-transparent text-white" ariant='transparent' onClick={() => { navigate('/about'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>About Us</div>
                        </button>
                        <button className="btn btn-transparent text-white" ariant='transparent' onClick={() => { navigate('/programs'); setExpanded(false); }}>
                            <div className='navpaths nav-text'> Mission and Vission</div>
                        </button>
                        <button className="btn btn-transparent text-white" ariant='transparent' onClick={() => { navigate('/heros'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>Services</div>
                        </button>
                        <button className="btn btn-transparent text-white" ariant='transparent' onClick={() => setLgShow(true) > navigate('#!')}>
                            <div className='navpaths nav-text'>Contact Us</div>
                        </button>
                        <div className="d-flex align-items-center justify-content-center">
                            <button onClick={() => { navigate('/donate'); setExpanded(false); }} className="btn btn-primary mx-2 me-lg-0">Learn More</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button onClick={() => { navigate('/donate'); setExpanded(false); }} className="btn btn-primary mx-2 me-lg-0">Get Started</button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};