import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{ background: '#F3F4F6' }} className="d-flex justify-content-center align-items-center py-5">
        <Container className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center">
                {/* First Column */}
                <Col lg={6} className="justify-content-between" style={{ height: '100%' }}>
                    <div>
                        <h1>Who are we</h1>
                        <h2 style={{ color: '#039' }}>Discover Hexa Learning</h2>
                    </div>
                    <div>
                        <p>Join us in our journey to transform education for a brighter future.</p>
                    </div>
                </Col>

                {/* Second Column */}
                <Col lg={6}>
                    <p>
                        Hexa Learning is dedicated to revolutionizing education by 
                        providing tailored solutions for schools, teachers, and students.
                        Founded in 2020, we have established ourselves as a leader in
                        educational technology, focusing on integrity, innovation, and
                        quality. Our mission is to create ideal learning ecosystems that
                        empower students, engage teachers, and support school
                        management. Through strategic partnerships and cutting-edge
                        technology, we aim to enhance learning experiences and address
                        the diverse needs of the education sector. 
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default AboutUs;
