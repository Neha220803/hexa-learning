import React from 'react'
import missionimage from '../images/mission-img.png'
import {Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

const Mission = () => {
  return (
    <section className="d-flex justify-content-center align-items-center">
        <Container className="d-flex flex-column justify-content-center align-items-start">
            <Row className='my-4'>
                <h1>Our Mission</h1>
            </Row>
            <Row className='mb-4'>
            <Image
              src={missionimage}
              alt="Mission Image"
              fluid // Makes the image responsive
              style={{ borderRadius: '10px' }} // Optional styling for rounded corners
            />
            </Row>
            <Row className='mt-2'>
                <p>At Hexa Learning, our mission is to empower students and educational institutions through 
                expert consultancy, fostering a culture of informed decision-making and academic success. 
                We envision becoming a leading education consultancy recognized for our commitment to excellence, 
                innovation, and the success of our clients. Our core values of integrity, empowerment, 
                collaboration, and innovation guide us in every interaction, ensuring that we provide tailored 
                support that meets the unique needs of each client. We believe that every student deserves the 
                opportunity to achieve their educational goals, and we are dedicated to making that a reality.
                </p>
            </Row>
        </Container>
    </section>
  )
}

export default Mission