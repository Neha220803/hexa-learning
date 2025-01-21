import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import mathimg from '../images/math-img.png';

const IQMathSection = () => {
  return (
    <section style={{backgroundColor: 'black', color:'white'}}  className="d-flex justify-content-center align-items-center">
            <Container >
            <Row  className="d-flex justify-content-end align-items-center">
              <Col lg={6}>
                <h1>Empowering Young Minds
                with Math Confidence</h1>
                <p>
                Our partnership with Chrysaalis I-Maths India offers enrichment
                programs that transform math learning into a fun and engaging
                experience. We aim to overcome math anxiety in children aged 3 to 8,
                fostering a positive attitude towards mathematics.
                </p>
              </Col>
              <Col lg={6} className="d-flex justify-content-end align-items-end">
                <Image
                  src={mathimg}
                  alt="IQ Math image"
                  fluid // Makes the image responsive
                  style={{ borderRadius: '10px', height: '500px', width: 'auto'}}
                />
              </Col>
        </Row>
      </Container>
    </section>
  )
}

export default IQMathSection