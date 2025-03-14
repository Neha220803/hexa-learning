import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import mathimg from "../images/math-img.png";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
} from "../animations/variants";

const IQMathSection = () => {
  const { ref, animate } = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "black", color: "white" }}
      className="d-flex justify-content-center align-items-center py-5 px-2"
      id="math"
    >
      <Container>
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6}>
            <motion.div
              variants={leftColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <h1>Empowering Young Minds with Math Confidence</h1>
              <p>
                <strong style={{ color: "#039" }}>
                  {" "}
                  Chrysaalis I-Maths India{" "}
                </strong>{" "}
                is an Early Years Learning Skills Development and Franchising
                Company that caters to children aged{" "}
                <strong style={{ color: "#FFD700" }}>3 to 8 years</strong>. Our
                programs, <strong>I-Maths</strong> and{" "}
                <strong>Smart Steps</strong>, are designed as{" "}
                <em>"after-school programs"</em> that complement and supplement
                the learning children acquire in school.
              </p>
              <p>
                The <strong style={{ color: "#039" }}>I-Maths</strong> and
                <strong style={{ color: "#039" }}> Smart Steps</strong> programs
                are{" "}
                <strong style={{ color: "#25de25" }}>
                  enrichment initiatives
                </strong>{" "}
                focused on combating the dreaded fear of mathematics (
                <em>Math Phobia</em>) in children while fostering a sense of joy
                and love for learning math as a subject.
              </p>
              <p>
                As a franchising company, we aim to enhance the content and
                business value of our franchisee play schools and activity
                centers. We achieve this by creating a strong positive word of
                mouth for these centers, built on the foundation of the{" "}
                <strong style={{ color: "#FFD700" }}>
                  excellent pedagogical curricula{" "}
                </strong>
                we offer.
              </p>
              <h3>Our Program USPs:</h3>
              <p>
                <ul>
                  <li>Low-cost installations</li>
                  <li>High return on investment</li>
                  <li>Low break-even thresholds</li>
                  <li>
                    Enhanced pedagogical offerings for play schools and activity
                    centers
                  </li>
                </ul>
              </p>
            </motion.div>
          </Col>
          <Col lg={6} className="d-flex justify-content-end align-items-end">
            <motion.div
              variants={rightColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <Image
                src={mathimg}
                alt="IQ Math image"
                fluid
                className="img-fluid height-lg-600px height-sm-300px d-block"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IQMathSection;
