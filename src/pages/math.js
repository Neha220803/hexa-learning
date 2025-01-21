import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import mathimg from '../images/math-img.png';

const IQMathSection = () => {
  return (
    <section className='bg-black text-white'>
        <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <h1>Empowering Young Minds
            with Math Confidence</h1>
            <p>
            Our partnership with Chrysaalis I-Maths India offers enrichment
programs that transform math learning into a fun and engaging
experience. We aim to overcome math anxiety in children aged 3 to 8,
fostering a positive attitude towards mathematics.
            </p>

          </Col>
          <Col lg={7}>
            <Image
              src={mathimg}
              alt="Achievements"
              fluid // Makes the image responsive
              style={{ borderRadius: '10px' }} // Optional styling for rounded corners
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default IQMathSection