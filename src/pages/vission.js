import React from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap';

const VissionSection = () => {
  return (
    <div>
        <Container>
            <Row>
            <h1>Vision</h1>
            </Row>
            <Row>
            <p>Our Vision is to create schools that are ideal learning ecosystems and enablers in</p>
            </Row>
            <Row>
                <Col lg={4}>
                    <h2>
                    Helping students
                    </h2>
                    <p>
                    Helping students identifying and realizing their true potential.
                    </p>
                </Col>

                <Col lg={4}>
                    <h2>
                    Assisting teachers
                    </h2>
                    <p>
                    Assisting teachers in positively engaging with students to provide a conducive learning environment and
                    </p>
                </Col>

                <Col lg={4}>
                    <h2>
                    Aiding the management
                    </h2>
                    <p>
                    Aiding the management in operating the school efficiently by providing service support in all functional areas
                    </p>
                </Col>
                
            </Row>
        </Container>
        
    </div>
  )
}

export default VissionSection