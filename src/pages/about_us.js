import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6}>
                <h1>
                    Who are we
                </h1>
                <h2>
                    Discover Hexa Learning
                </h2>
                <p>
                Join us in our journey to transform education for a brighter future.
                    </p>
                </Col>
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
  )
}

export default AboutUs