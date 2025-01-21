import React from 'react';
import headerimg from '../images/header-img.png'; // Ensure this path is correct
import {Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

const HeaderPage = () => {
  return (
    <header className="d-flex justify-content-center align-items-center pt-5">
      <Container>
      <Row className="d-flex justify-content-center align-items-center pt-4">
                  <Col lg={6}>
                    <Image
                      src={headerimg}
                      alt="header image"
                      fluid // Makes the image responsive
                      style={{ borderRadius: '10px', height: '500px', width: 'auto'}} // Optional styling for rounded corners
                    />
                  </Col>
                  <Col lg={6}>
                    <h1>Transforming Educations<br></br>with Innovation</h1>
                    <p className='mt-5'>
                    At Hexa Learning, we revolutionize education with customized
                    solutions for schools. Our AR-based kits and enrichment
                    programs make learning engaging and fun for students.
                    </p>
                    <div className='mt-2'>
                    <button className='prim-button me-3'>
                        Learn More
                    </button>
                    <button className='transparent-button'>Contact Us</button>
                    </div>
                  </Col>
      </Row>
      </Container>   
    </header>
  );
};

export default HeaderPage;
