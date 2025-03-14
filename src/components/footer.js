import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1A1A1A", color: "#fff" }}
      className="py-5"
    >
      <Container>
        <Row>
          {/* Company Section */}
          <Col md={3} lg={3} sm={4} xs={4}>
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="footer-link">
                  Mission & Vision
                </a>
              </li>
            </ul>
          </Col>

          {/* Services Section */}
          <Col md={3} lg={2} sm={4} xs={4}>
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#services" className="footer-link">
                  Our Services
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={3} lg={3} sm={4} xs={4}>
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter Section */}
          <Col md={3} lg={4}>
            <h4>Subscribe to Our Newsletter</h4>
            <div style={{ fontSize: "16px" }}>
              Stay updated with the latest insights and educational trends from
              Hexa Learning.
            </div>
            <Form className="my-2">
              <Form.Group className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ marginRight: "10px" }}
                />
                <button className="prim-button">Subscribe</button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <hr style={{ borderColor: "#444" }} />

        <Row className="mt-3">
          <Col md={6}>
            <div style={{ fontSize: "16px" }}>
              Copyright © 2025, hexalearning.com. All rights reserved.
            </div>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#" className="footer-link" style={{ marginRight: "15px" }}>
              Terms & Conditions
            </a>
            <a href="#" className="footer-link" style={{ marginRight: "15px" }}>
              Privacy Policy
            </a>
            <a href="#" className="footer-link" style={{ marginRight: "10px" }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="footer-link" style={{ marginLeft: "10px" }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="footer-link" style={{ marginLeft: "10px" }}>
              <i className="fab fa-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
