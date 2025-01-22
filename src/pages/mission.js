import React, { useState, useEffect } from 'react';
import missionimage from '../images/mission-img.png'
import { Container, Row, Image } from 'react-bootstrap';

const Mission = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); // Check if screen size is smaller than 576px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center px-2" id="mission">
        <Container className="d-flex flex-column justify-content-center align-items-start">
            <Row className='my-4'>
                <h1>Our Mission</h1>
            </Row>
            <Row className='mb-4'>
            <Image
              src={missionimage}
              alt="Mission Image"
              fluid
              style={{
                borderRadius: '10px',
                height: isMobile ? '200px' : 'auto', // Apply 200px height for mobile
                objectFit: 'cover',
              }}
            />
            </Row>
            <Row className='mt-2'>
                <p>At Hexa Learning, our mission is to provide exemplary school support services, professional development services, 
                and training in all areas of School operations and Management. Our service offerings are built 
                on strong values such as Integrity, Innovation and Quality. We share a deep passion for excellence 
                through our commitment to students, teachers, parents, regulatory bodies and to our own standards.
                </p>
            </Row>
        </Container>
    </div>
  )
}

export default Mission;
