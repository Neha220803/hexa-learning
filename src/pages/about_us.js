import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{ background: '#F3F4F6' }} className="d-flex justify-content-center align-items-center px-2 py-5" id="about">
        <Container className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center">
                {/* First Column */}
                <Col lg={6} className="justify-content-between mb-2 mb-lg-0" style={{ height: '100%' }}>
                    <div>
                        <h1 className="mb-lg-3">Who are we ?</h1>
                        <h2 style={{ color: '#039' }} className="mb-3">Discover Hexa Learning</h2>
                    </div>
                    <div>
                        <p className="mb-0">Join us in our journey to transform education for a brighter future.</p>
                    </div>
                </Col>

                {/* Second Column */}
                <Col lg={6}>
                    <p>
                        Hexa Learning is dedicated in reinventing education by 
                        providing tailored solutions for schools, teachers, and students.
                        We are an educational consultancy company,  rich in a kaleidoscope 
                        of experience ranging from pre school after school programs to managing 
                        K-12 schools to preparation in competitive exams to higher education abroad. 
                        We specialize in creating tailor made solutions to meet any need that schools 
                        may have, be it academic, marketing  or operational.  
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default AboutUs;
