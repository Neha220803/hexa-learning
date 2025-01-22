import React from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap';
import arimg from '../images/image -ar.png'
import '../App.css';

const ARSection = () => {
  
  return (
        <div style={{background: '#F3F4F6'}} className="d-flex flex-column justify-content-center align-items-center py-5 px-2" id="ar">
            <Container className='d-flex flex-column justify-content-center align-items-center' >
              <Row className='d-flex justify-content-center align-items-center' >
                  <Col lg={6} className='d-flex flex-column justify-content-center align-items-start' >
                  <p style={{color: "#25de25"}}><strong>INTERACTIVE LEARNING</strong></p>
                  <h1>Transform Education with AR Kits: <span style={{color: "#039"}}>Bellspire</span></h1>
                  <p><strong style={{color: "#FFD700"}}>Who We Cater To ?</strong><br></br>
                  Our AR kits are designed to enhance the learning experience for students in the following grades:
                  <ul>
                    <li>Nursery</li>
                    <li>Junior Kindergarten</li>
                    <li>Senior Kindergarten</li>
                    <li>Grade 1</li>
                    <li>Grade 2</li>
                  </ul>
                  </p>
                  </Col>
                  <Col lg={6} className='d-flex flex-column justify-content-center align-items-center' >
                  <p>Discover the future of education with our advanced AR-based learning kit - 
                  <strong style={{color: "#039"}}> Bellspire</strong>, which is a two-time award-winning 
                  technology company focusing on creating world-class Augmented Reality / Virtual Reality 
                  content for pre-primary and primary students. The AR product of Bellspire is 
                  <strong style={{color: "#039"}}> Bijom</strong>, a pack of 200 AR cards dealing with various 
                  topics covering preprimary and primary syllabi. The USP of the app is that it has voice 
                  over in <strong style={{color: "#25de25"}}>9 Indian languages</strong> including English, 
                  and the app works offline.</p>
                  <p>Hexa Learning is the <strong style={{color: "#FFD700"}}>National Sales Associate</strong> for 
                  marketing and selling the company’s AR kits. The objective is to create a strong 
                  <strong style={{color: "#FFD700"}}> B2B</strong> and <strong style={{color: "#FFD700"}}>B2C </strong> 
                  network in all major states and cities in the country to create a strong brand recall 
                  and to meet the AR kits sales targets.</p>

                  {/* Developed in collaboration with Bellspire, these kits include 200 AR cards 
                      that cover a wide range of topics, making learning both engaging and 
                      interactive. With support for nine languages and offline capabilities, our 
                      kits are designed to enhance student engagement and accessibility. */}
                  </Col>
              </Row>
            </Container>
            <Container>
            <Row className='mt-2 my-lg-1'>
                  <Image 
                  //  width= '100vw'
                    src={arimg}
                    alt="Mission Image"
                    fluid // Makes the image responsive 
                    style={{ borderRadius: '30px', height: '300px', objectFit:'cover'}} // Optional styling for rounded corners
                    className='img-fluid'
                  />
              </Row>

            </Container>
            
        </div>
  )
}

export default ARSection