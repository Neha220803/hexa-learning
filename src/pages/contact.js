import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  // State for State and City
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  // Dummy data for state and city
  const stateOptions = [
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Maharashtra", label: "Maharashtra" },
  ];

  const cityOptions = {
    "Tamil Nadu": [
      { value: "Chennai", label: "Chennai" },
      { value: "Coimbatore", label: "Coimbatore" },
      { value: "Madurai", label: "Madurai" },
    ],
    Karnataka: [
      { value: "Bangalore", label: "Bangalore" },
      { value: "Mysore", label: "Mysore" },
      { value: "Mangalore", label: "Mangalore" },
    ],
    Kerala: [
      { value: "Kochi", label: "Kochi" },
      { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
      { value: "Kozhikode", label: "Kozhikode" },
    ],
    Maharashtra: [
      { value: "Mumbai", label: "Mumbai" },
      { value: "Pune", label: "Pune" },
      { value: "Nagpur", label: "Nagpur" },
    ],
  };

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setCity(null); // Reset city when state changes
  };

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  // Options for "Enquire For"
  const enquiryOptions = [
    { value: "Smart Learn", label: "Smart Learn" },
    { value: "Chrysaalis I-Maths Franchise", label: "Chrysaalis I-Maths Franchise" },
    { value: "School Consultancy", label: "School Consultancy" },
  ];

  return (
    <div style={{ padding: "2rem 0" }}>
      <Container>
        <Row>
          {/* Left Column: Contact Details with Icons */}
          <Col lg={6} style={{ marginBottom: "2rem" }}>
            <h2>Get in Touch</h2>
            <p>We’d love to hear from you! Reach out today.</p>
            <p>
              <FaEnvelope style={{ color: "#007bff", marginRight: "10px" }} />
              <strong>Email:</strong> info@hexalearning.com
            </p>
            <p>
              <FaPhoneAlt style={{ color: "#007bff", marginRight: "10px" }} />
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <FaMapMarkerAlt style={{ color: "#007bff", marginRight: "10px" }} />
              <strong>Address:</strong> 123 Lorem Lane, Ipsum Street,<br /> Chennai, India
            </p>
            <div style={{ border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
              {/* Replace this iframe with your actual map embed */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.779914394029!2d78.133479!3d10.7900328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa85dcece634fd%3A0xb72f9ad758d91c9f!2sChennai!5e0!3m2!1sen!2sin!4v1689876543210!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={6}>
            <h2>Contact Us</h2>
            <Form>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>

              {/* State Picker */}
              <Form.Group controlId="state" className="mb-3">
                <Form.Label>State</Form.Label>
                <Select
                  options={stateOptions}
                  value={state}
                  onChange={handleStateChange}
                  placeholder="Select your state"
                />
              </Form.Group>

              {/* City Picker */}
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Select
                  options={state ? cityOptions[state.value] : []}
                  value={city}
                  onChange={handleCityChange}
                  placeholder="Select your city"
                  isDisabled={!state} // Disable city until state is selected
                />
              </Form.Group>

              {/* Enquire For Dropdown */}
              <Form.Group controlId="enquireFor" className="mb-3">
                <Form.Label>Enquire For</Form.Label>
                <Select
                  options={enquiryOptions}
                  placeholder="Select an option"
                />
              </Form.Group>

              <Form.Group controlId="remarks" className="mb-3">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter any additional information"
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
