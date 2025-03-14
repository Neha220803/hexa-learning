import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import arimg from "../images/image -ar.png";
import "../App.css";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
} from "../animations/variants";

const ARSection = () => {
  const { ref, animate } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ background: "#F3F4F6" }}
      className="d-flex flex-column justify-content-center align-items-center py-5 px-2"
      id="ar"
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <motion.div
              variants={leftColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <p style={{ color: "#25de25" }}>
                <strong>INTERACTIVE LEARNING</strong>
              </p>
              <h1>
                Transform Education with AR Kits:{" "}
                <span style={{ color: "#039" }}>Bellspire</span>
              </h1>
              <p>
                <strong style={{ color: "#FFD700" }}>Who We Cater To ?</strong>
                <br></br>
                Our AR kits are designed to enhance the learning experience for
                students in the following grades:
                <ul>
                  <li>Nursery</li>
                  <li>Junior Kindergarten</li>
                  <li>Senior Kindergarten</li>
                  <li>Grade 1</li>
                  <li>Grade 2</li>
                </ul>
              </p>
            </motion.div>
          </Col>
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <motion.div
              variants={rightColumnVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              <p>
                Discover the future of education with our advanced AR-based
                learning kit -
                <strong style={{ color: "#039" }}> Bellspire</strong>, which is
                a two-time award-winning technology company focusing on creating
                world-class Augmented Reality / Virtual Reality content for
                pre-primary and primary students. The AR product of Bellspire is
                <strong style={{ color: "#039" }}> Bijom</strong>, a pack of 200
                AR cards dealing with various topics covering preprimary and
                primary syllabi. The USP of the app is that it has voice over in{" "}
                <strong style={{ color: "#25de25" }}>9 Indian languages</strong>{" "}
                including English, and the app works offline.
              </p>
              <p>
                Hexa Learning is the{" "}
                <strong style={{ color: "#FFD700" }}>
                  National Sales Associate
                </strong>{" "}
                for marketing and selling the company's AR kits. The objective
                is to create a strong
                <strong style={{ color: "#FFD700" }}> B2B</strong> and{" "}
                <strong style={{ color: "#FFD700" }}>B2C </strong>
                network in all major states and cities in the country to create
                a strong brand recall and to meet the AR kits sales targets.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-2 my-lg-1">
          <motion.div
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3,
                },
              },
            }}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
          >
            <Image
              src={arimg}
              alt="Mission Image"
              fluid // Makes the image responsive
              style={{
                borderRadius: "30px",
                height: "300px",
                width: "100%",
                objectFit: "cover",
              }} // Optional styling for rounded corners
              className="img-fluid"
            />
          </motion.div>
        </Row>
      </Container>
    </div>
  );
};

export default ARSection;
