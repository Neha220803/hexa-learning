import React from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap';
import arimg from '../images/image -ar.png'

const ARSection = () => {
  return (
    <section>
        <div>
            <Container>
            <Row>
                <Col lg={6}>
                <p>Interactive Learning</p>
                <h1>Transform Education with AR Kits</h1>
                </Col>
                <Col lg={6}>
                <p>Discover the future of education with our advanced AR-based learning kits. 
                    Developed in collaboration with Bellspire, these kits include 200 AR cards 
                    that cover a wide range of topics, making learning both engaging and 
                    interactive. With support for nine languages and offline capabilities, our 
                    kits are designed to enhance student engagement and accessibility.</p>
                <button className='btn-primary'>
                    learn more
                </button>
                </Col>
                

                </Row>
                </Container>
                <Row>
                <Image
                 width= '100vw'
              src={arimg}
              alt="Mission Image"
              fluid // Makes the image responsive
              style={{ borderRadius: '10px' }} // Optional styling for rounded corners
            />
                </Row>
            
        </div>
       
    </section>
  )
}

export default ARSection