import React from "react";
import headerimg from "../images/header-img.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
} from "../animations/variants";
import "../App.css";

const HeaderPage = () => {
  const handleContactClick = () => {
    window.location.hash = "contact";
  };

  const handleServiceClick = () => {
    window.location.hash = "services";
  };

  // Use the scroll animation hook for each column
  const leftAnimation = useScrollAnimation();
  const rightAnimation = useScrollAnimation();

  return (
    <header className="d-flex justify-content-center align-items-center pt-3 px-2 pt-md-5">
      <Container className="mt-3 py-5 mt-md-0 py-md-0">
        <Row className="d-flex justify-content-center align-items-center pt-3 pt-md-4">
          <Col lg={6} className="mb-4 mb-sm-0">
            <motion.div
              className="d-flex justify-content-center p-lg-5"
              ref={leftAnimation.ref}
              initial="hidden"
              animate={leftAnimation.animate ? "visible" : "hidden"}
              variants={leftColumnVariants}
            >
              <Image
                src={headerimg}
                alt="header image"
                fluid
                className="img-fluid header-img"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              ref={rightAnimation.ref}
              initial="hidden"
              animate={rightAnimation.animate ? "visible" : "hidden"}
              variants={rightColumnVariants}
            >
              <h1 className="stroke-animation">
                Transforming <span className="stroke-text">Education</span>
                <br />
                with Innovation
              </h1>
              <p className="mt-3 mt-md-5">
                At Hexa Learning, we revolutionize education with customized
                solutions for schools. Our AR-based kits and enrichment programs
                make learning engaging and fun for students.
              </p>
              <div className="mt-2">
                <button
                  className="prim-button me-3"
                  onClick={handleServiceClick}
                >
                  Learn More
                </button>
                <button
                  className="transparent-button"
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderPage;
