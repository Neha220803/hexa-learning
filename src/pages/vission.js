import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaChalkboardTeacher, FaBusinessTime } from 'react-icons/fa'; // Importing icons

const VissionSection = () => {
  return (
    <div style={{ background: '#039', color: 'white' }} className="d-flex justify-content-center align-items-center py-5">
      <Container className="d-flex flex-column justify-content-center align-items-start g-5">
        <Row className='my-3'>
          <h1>Vision</h1>
          <p>Our Vision is to create schools that are ideal learning ecosystems and enablers in</p>
        </Row>
        <Row className="g-4"> {/* Adding gap of 4 between columns */}
          {/* First Column: Helping Students */}
          <Col lg={4} className="text-start">
            <FaGraduationCap size={30} />
            <h3>Helping students</h3>
            <p>Helping students identify and realize their true potential.</p>
          </Col>

          {/* Second Column: Assisting Teachers */}
          <Col lg={4} className="text-start">
            <FaChalkboardTeacher size={30} />
            <h3>Assisting teachers</h3>
            <p>Assisting teachers in positively engaging with students to provide a conducive learning environment.</p>
          </Col>

          {/* Third Column: Aiding Management */}
          <Col lg={4} className="text-start">
            <FaBusinessTime size={30} />
            <h3>Aiding Management</h3>
            <p>Aiding the management in operating the school efficiently by providing service support in all functional areas.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VissionSection;
