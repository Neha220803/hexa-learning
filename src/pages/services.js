import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import serviceImage1 from "../images/services-1.png"; // Replace with your image paths
import serviceImage2 from "../images/services-2.png";
import serviceImage3 from "../images/services-3.png";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
  cardFadeInVariants,
} from "../animations/variants";
import "../App.css";

const Services = () => {
  // Scroll animation for the entire section
  const { ref, animate } = useScrollAnimation();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Function to handle button click and scroll to the corresponding section
  const handleClick = (index) => {
    let targetId = "";
    switch (index) {
      case 0:
        targetId = "ar"; // For index 0, scroll to section with id "ar"
        break;
      case 1:
        targetId = "math"; // For index 1, scroll to section with id "maths"
        break;
      case 2:
        targetId = "school"; // For index 2, scroll to section with id "school"
        break;
      default:
        return;
    }
    window.location.hash = targetId; // Change URL hash and scroll to the section
  };

  const services = [
    {
      title: "AR-Based Learning Kits",
      description:
        "Engage students with immersive augmented reality kits, revolutionizing the way they learn complex subjects.",
      image: serviceImage1,
    },
    {
      title: "Math Enrichment Programs",
      description:
        "Boost students' confidence and skills in mathematics with our specially curated enrichment programs.",
      image: serviceImage2,
    },
    {
      title: "School Consultancy Services",
      description:
        "Empower schools with tailored consultancy solutions to foster growth, innovation, and academic excellence.",
      image: serviceImage3,
    },
  ];

  return (
    <section
      ref={ref}
      className="d-flex justify-content-center align-items-center py-3 px-2 py-lg-5"
      id="services"
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-start mb-2">
          <Col lg={6}>
            <motion.div
              variants={leftColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <h1>Explore Our Innovative Educational Services</h1>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              variants={rightColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <p>
                At Hexa Learning, we offer a range of cutting-edge educational
                solutions designed to enhance learning experiences. Our
                offerings include advanced AR-based learning kits, math
                enrichment programs, and comprehensive school consultancy
                services, all tailored to meet the diverse needs of schools,
                teachers, and students.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                variants={cardFadeInVariants}
                custom={index}
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                // animate={animate || isMobile ? "visible" : "hidden"} // Force animation on mobile
              >
                <Card className="border-0">
                  <div className="custom-card">
                    <Card.Img
                      variant="top"
                      src={service.image}
                      alt={service.title}
                      style={{ borderRadius: "23px" }}
                    />
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                      <button
                        className="transparent-button"
                        onClick={() => handleClick(index)}
                      >
                        Learn More
                      </button>
                    </Card.Body>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
