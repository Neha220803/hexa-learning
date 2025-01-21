import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import serviceImage1 from '../images/services-1.png'; // Replace with your image paths
import serviceImage2 from '../images/services-2.png';
import serviceImage3 from '../images/services-3.png';

const Services = () => {
  return (
    <div>
      <Container>
        {/* Intro Section */}
        <Row className="my-4">
          <Col lg={6}>
            <h1>Explore Our Innovative Educational Services</h1>
          </Col>
          <Col lg={6}>
            <p>
              At Hexa Learning, we offer a range of cutting-edge educational solutions designed to enhance learning
              experiences. Our offerings include advanced AR-based learning kits, math enrichment programs, and
              comprehensive school consultancy services, all tailored to meet the diverse needs of schools, teachers,
              and students.
            </p>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={4} md={6}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={serviceImage1} alt="Service 1" />
              <Card.Body>
                <Card.Title>AR-Based Learning Kits</Card.Title>
                <Card.Text>
                  Engage students with immersive augmented reality kits, revolutionizing the way they learn complex
                  subjects.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={4} md={6}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={serviceImage2} alt="Service 2" />
              <Card.Body>
                <Card.Title>Math Enrichment Programs</Card.Title>
                <Card.Text>
                  Boost students' confidence and skills in mathematics with our specially curated enrichment programs.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={4} md={6}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={serviceImage3} alt="Service 3" />
              <Card.Body>
                <Card.Title>School Consultancy Services</Card.Title>
                <Card.Text>
                  Empower schools with tailored consultancy solutions to foster growth, innovation, and academic
                  excellence.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
