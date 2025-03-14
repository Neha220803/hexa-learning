import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBusinessTime,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  visionHeadingVariants,
  visionCardVariants,
} from "../animations/variants";

const VisionSection = () => {
  const { ref, animate } = useScrollAnimation();

  const visionItems = [
    {
      icon: <FaGraduationCap size={40} />,
      title: "Helping students",
      description:
        "Helping students identify and realize their true potential.",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Assisting teachers",
      description:
        "Assisting teachers in positively engaging with students to provide a conducive learning environment.",
    },
    {
      icon: <FaBusinessTime size={40} />,
      title: "Aiding Management",
      description:
        "Aiding the management in operating the school efficiently by providing service support in all functional areas.",
    },
  ];

  return (
    <div
      ref={ref}
      style={{ background: "#039", color: "white" }}
      className="d-flex justify-content-center align-items-center py-lg-5 py-3 px-2"
    >
      <Container className="d-flex flex-column justify-content-center align-items-start">
        <motion.div
          className="w-100 my-3"
          variants={visionHeadingVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        >
          <h1>Vision</h1>
          <p>
            Our Vision is to create schools that are ideal learning ecosystems
            and enablers in
          </p>
        </motion.div>

        <Row className="g-4 w-100">
          {visionItems.map((item, index) => (
            <Col lg={4} className="text-start" key={index}>
              <motion.div
                variants={visionCardVariants}
                custom={index}
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
                className="p-3 h-100"
              >
                <div className="mb-3">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default VisionSection;
