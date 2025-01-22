import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';
import logo1 from '../images/logo.png';
import '../App.css';

// Dynamically set the base path
const BASE_PATH = process.env.PUBLIC_URL || '';

export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    // Function to handle scrolling to sections and collapsing the navbar
    const handleScroll = (sectionId) => {
        const targetId = sectionId ? `#${sectionId}` : '';
        window.location.href = `${BASE_PATH}/${targetId}`;
        setExpanded(false); // Collapse the navbar
    };

    const handleNavbarToggle = () => setExpanded(!expanded);

    return (
        <Navbar className="navcont fixed-top" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href={`${BASE_PATH}/#`}>
                    <img
                        alt=""
                        src={logo1}
                        width="250"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <div className="custom-toggle"
                    style={{
                        cursor: 'pointer',
                        fontSize: '30px',
                        color: '#00FF01', // Green color for the icon
                    }}
                    onClick={handleNavbarToggle}
                >
                    {expanded ? <FiX /> : <FiMenu />}
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link
                            href={`${BASE_PATH}/#`}
                            className="navpaths nav-text"
                            onClick={() => handleScroll('')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href={`${BASE_PATH}/#about`}
                            className="navpaths"
                            onClick={() => handleScroll('about')}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            href={`${BASE_PATH}/#mission`}
                            className="navpaths"
                            onClick={() => handleScroll('mission')}
                        >
                            Mission & Vision
                        </Nav.Link>
                        <Nav.Link
                            href={`${BASE_PATH}/#services`}
                            className="navpaths"
                            onClick={() => handleScroll('services')}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            href={`${BASE_PATH}/#contact`}
                            className="navpaths"
                            onClick={() => handleScroll('contact')}
                        >
                            Contact Us
                        </Nav.Link>
                        <div className="d-flex align-items-center justify-content-center">
                            <button
                                className="prim-button mx-2 me-lg-0"
                                onClick={() => handleScroll('contact')}
                            >
                                Get Started
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
