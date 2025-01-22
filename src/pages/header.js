import React from 'react';
import headerimg from '../images/header-img.png'; // Ensure this path is correct
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

const HeaderPage = () => {

  const handleContactClick = () => {
    window.location.hash = 'contact';
  };

  const handleServiceClick = () => {
    window.location.hash = 'services';
  };

  return (
    <header className="d-flex justify-content-center align-items-center pt-3 px-2 pt-md-5">
      <Container>
        <Row className="d-flex justify-content-center align-items-center pt-3 pt-md-4">
          <Col lg={6} className="mb-4 mb-sm-0">
            {/* For mobile screens, center the image */}
            <div className="d-flex justify-content-center p-lg-5">
              <Image
                src={headerimg}
                alt="header image"
                fluid
                className="img-fluid"
                style={{
                  borderRadius: '10px',
                  width: '100%',  // Make it take full width on mobile
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <h1>Transforming <span style={{ color: "#039" }}>Educations</span><br />with Innovation</h1>
            <p className='mt-3 mt-md-5'>
              At Hexa Learning, we revolutionize education with customized
              solutions for schools. Our AR-based kits and enrichment
              programs make learning engaging and fun for students.
            </p>
            <div className='mt-2'>
              <button className='prim-button me-3' onClick={handleServiceClick}>
                Learn More
              </button>
              <button className='transparent-button' onClick={handleContactClick}>
                Contact Us
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderPage;
