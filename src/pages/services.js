import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import serviceImage1 from '../images/services-1.png'; // Replace with your image paths
import serviceImage2 from '../images/services-2.png';
import serviceImage3 from '../images/services-3.png';
import '../App.css';

const Services = () => {
  // Array of service objects
  const services = [
    {
      title: 'AR-Based Learning Kits',
      description: 'Engage students with immersive augmented reality kits, revolutionizing the way they learn complex subjects.',
      image: serviceImage1,
    },
    {
      title: 'Math Enrichment Programs',
      description: 'Boost students\' confidence and skills in mathematics with our specially curated enrichment programs.',
      image: serviceImage2,
    },
    {
      title: 'School Consultancy Services',
      description: 'Empower schools with tailored consultancy solutions to foster growth, innovation, and academic excellence.',
      image: serviceImage3,
    },
  ];

  return (
    <section className="d-flex justify-content-center align-items-center py-5">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-start mb-2">
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
  {services.map((service, index) => (
    <Col lg={4} md={6} key={index}>
      <Card className="custom-card">
        <Card.Img variant="top" src={service.image} alt={service.title} />
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <button className="transparent-button">Learn More</button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </section>
  );
};

export default Services;
