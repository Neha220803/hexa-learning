import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const SchoolSection = () => {
  return (
    <div style={{ background: '#039', color: 'white' }} className="d-flex justify-content-center align-items-center py-lg-5 py-3 px-2" id="school">
       <Container className="d-flex flex-column justify-content-center align-items-start">
            <Row className="d-flex justify-content-center align-items-start">
                <Col lg={6}>
                <h1>
                Comprehensive School
                Consultancy Services
                </h1>
                <p>
                We provide end to end solutions in school operations
                    </p>
                </Col>
                <Col lg={6}>
                <p>
                At Hexa Learning, we provide expert consultancy services to schools,
                ensuring efficient operations and enhanced educational outcomes.
                Our services range from strategic site selection to comprehensive
                teacher training, tailored to meet the unique needs of each
                institution.
                </p>
                <Row>
                    <Col>
                    <ul>
                    <li>
                    Identifying possible school location
                    </li>
                    <li>
                    Takeover of existing schools
                    </li>
                    <li>
                    Catchment analysis
                    </li>
                </ul>
                    </Col>
                    <Col>
                    <ul>
                    <li>
                    Identifying possible school location
                    </li>
                    <li>
                    Takeover of existing schools
                    </li>
                    <li>
                    Catchment analysis
                    </li>
                </ul>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SchoolSection