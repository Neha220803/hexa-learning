import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CountUp from 'react-countup'; // Import CountUp
import achievemntimage from '../images/achievemnt-image.png';
import '../App.css';

const Achievments = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: 'black', color: 'white' }}
      className="d-flex justify-content-center align-items-center py-4 px-2"
    >
      <Container>
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6}>
            <h1>Our Commitment to Excellence</h1>
            <p>
              Hexa Learning is dedicated to revolutionizing education by providing tailored
              solutions for schools, teachers, and students. Founded in 2020, we have established
              ourselves as a leader in educational technology, focusing on integrity, innovation, and
              quality. Our mission is to create ideal learning ecosystems that empower students, engage
              teachers, and support school management. Through strategic partnerships and cutting-edge
              technology, we aim to enhance learning experiences and address the sector's needs of the
              education sector.
            </p>
            <Row>
              <Col>
                <h2>
                  {inView && <CountUp start={0} end={100} duration={3} suffix="% Success" />}
                </h2>
                <p>
                  We are dedicated to enhancing the educational experience for students, teachers, and
                  parents alike.
                </p>
              </Col>
              <Col>
                <h2>
                  {inView && <CountUp start={0} end={500} duration={3} suffix="+ Schools" />}
                </h2>
                <p>
                  Our vision is to create ideal learning ecosystems that empower students to reach their
                  full potential.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>
                  {inView && <CountUp start={0} end={1000} duration={3} suffix="+ Students" />}
                </h2>
                <p>
                  We aim to assist school management in operating efficiently, providing support across
                  all areas.
                </p>
              </Col>
              <Col>
                <h2>
                  {inView && <CountUp start={0} end={200} duration={3} suffix="+ Teachers" />}
                </h2>
                <p>
                  Through our innovative solutions, we are transforming the landscape of education for
                  future generations.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="d-flex justify-content-end align-items-end">
            <Image
              src={achievemntimage}
              alt="Achievements"
              fluid
              style={{ borderRadius: '10px', height: '500px', width: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achievments;
