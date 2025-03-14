import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
} from "../animations/variants";

const SchoolSection = () => {
  const { ref, animate } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ background: "#039", color: "white" }}
      className="d-flex justify-content-center align-items-center py-lg-5 py-3 px-2"
      id="school"
    >
      <Container className="d-flex flex-column justify-content-center align-items-start">
        <Row className="d-flex justify-content-center align-items-start">
          <Col lg={6}>
            <motion.div
              variants={leftColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <h1>Comprehensive School Consultancy Services</h1>
              <p>We provide end to end solutions in school operations</p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              variants={rightColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <p>
                At Hexa Learning, we provide{" "}
                <strong style={{ color: "#25de25" }}>
                  expert consultancy services
                </strong>{" "}
                to schools, ensuring efficient operations and enhanced
                educational outcomes. Our{" "}
                <strong style={{ color: "#FFD700" }}>
                  services are tailored
                </strong>{" "}
                to meet the unique needs of each institution in various range of
                areas such as:
              </p>
              <Row>
                <Col>
                  <p>
                    <ul>
                      <li>Identifying possible school location</li>
                      <li>Takeover of existing schools</li>
                      <li>Catchment analysis</li>
                    </ul>
                  </p>
                </Col>
                <Col>
                  <p>
                    <ul>
                      <li>Identifying possible school location</li>
                      <li>Takeover of existing schools</li>
                      <li>Catchment analysis</li>
                    </ul>
                  </p>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SchoolSection;
