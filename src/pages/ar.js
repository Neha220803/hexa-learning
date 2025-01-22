import React from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap';
import arimg from '../images/image -ar.png'
import '../App.css';

const ARSection = () => {
  
  return (
        <div style={{background: '#F3F4F6'}} className="d-flex flex-column justify-content-center align-items-center px-2" id="ar">
            <Container className='py-5' >
            <Row>
                <Col lg={6}>
                <p>INTERACTIVE LEARNING</p>
                <h1>Transform Education with AR Kits</h1>
                </Col>
                <Col lg={6}>
                <p>Discover the future of education with our advanced AR-based learning kits. 
                    Developed in collaboration with Bellspire, these kits include 200 AR cards 
                    that cover a wide range of topics, making learning both engaging and 
                    interactive. With support for nine languages and offline capabilities, our 
                    kits are designed to enhance student engagement and accessibility.</p>
                {/* <button className='prim-button'>
                    Learn more
                </button> */}
                </Col>
                </Row>
                <Row className='mt-2 mt-lg-5'>
                <Image 
                //  width= '100vw'
                  src={arimg}
                  alt="Mission Image"
                  fluid // Makes the image responsive 
                  style={{ borderRadius: '30px', height: '300px', objectFit:'cover'}} // Optional styling for rounded corners
                />
                </Row>
                </Container>
        </div>
  )
}

export default ARSection