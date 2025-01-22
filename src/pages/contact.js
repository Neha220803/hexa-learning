import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { State, City } from "country-state-city";

const ContactSection = () => {
  const [country, setCountry] = useState({
    value: "IN",
    label: "India"
  }); // Default to India
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [statesOptions, setStatesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  useEffect(() => {
    if (country) {
      // Fetch states based on selected country
      const states = State.getStatesOfCountry(country.value);
      const stateOptions = states.map((s) => ({
        value: s.isoCode,
        label: s.name
      }));
      setStatesOptions(stateOptions);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      // Fetch cities based on selected state
      const cities = City.getCitiesOfState(country.value, state.value);
      const cityOptions = cities.map((c) => ({
        value: c.name,
        label: c.name
      }));
      setCitiesOptions(cityOptions);
    }
  }, [state, country]);

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setCity(null); // Reset city when state changes
  };

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const enquiryOptions = [
    { value: "Smart Learn", label: "Smart Learn" },
    { value: "Chrysaalis I-Maths Franchise", label: "Chrysaalis I-Maths Franchise" },
    { value: "School Consultancy", label: "School Consultancy" },
  ];

  return (
    <section className="d-flex justify-content-center align-items-center py-3 px-2 px-lg-0 py-lg-5" id="contact">
      <Container>
        <Row>
          {/* Left Column: Contact Details with Icons */}
          <Col lg={6} style={{ marginBottom: "2rem" }}>
            <h2 style={{color: "#039"}}>Get in Touch</h2>
            <p>We’d love to hear from you! Reach out today.</p>
            <p>
              <FaEnvelope style={{ color: "#039", marginRight: "10px" }} />
              <strong>Email:</strong> info@hexalearning.com
            </p>
            <p>
              <FaPhoneAlt style={{ color: "#039", marginRight: "10px" }} />
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <FaMapMarkerAlt style={{ color: "#039", marginRight: "10px" }} />
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
          <Form>
            <Form.Group controlId="name" className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="custom-input" />
            </Form.Group>

            <Form.Group controlId="email" className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" className="custom-input"/>
            </Form.Group>

            <Form.Group controlId="phone" className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" className="custom-input" />
            </Form.Group>

            <div className="d-flex gap-3">
              {/* State Picker */}
              <Form.Group controlId="state" className="mb-2 d-flex flex-column" style={{  width:'50%' }}>
                <Form.Label>State</Form.Label>
                <select
                  value={state ? state.value : ""}
                  onChange={(e) => handleStateChange({ value: e.target.value, label: e.target.selectedOptions[0].label })}
                  disabled={!country}
                  className="custom-dropdown"
                >
                  <option value="" disabled>Select your state</option>
                  {statesOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Form.Group>

              {/* City Picker */}
              <Form.Group controlId="city" className="mb-2 d-flex flex-column" style={{ width:'50%'}}>
                <Form.Label>City</Form.Label>
                <select
                  value={city ? city.value : ""}
                  onChange={(e) => handleCityChange({ value: e.target.value, label: e.target.selectedOptions[0].label })}
                  disabled={!state}
                  className="custom-dropdown"
                >
                  <option value="" disabled>Select your city</option>
                  {citiesOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </div>

            {/* Enquire For Dropdown */}
            <Form.Group controlId="enquireFor" className="mb-2 d-flex flex-column">
  <Form.Label>Enquire For</Form.Label>
  <select className="custom-dropdown" id="enquireForSelect">
    <option value="" disabled selected>Select an option</option>
    {enquiryOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</Form.Group>


            <Form.Group controlId="remarks" className="mb-2">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                as="input"
                rows={3}
                placeholder="Enter any additional information"
                className="custom-input"
              />
            </Form.Group>

            <button type="submit" className="prim-button">
              Submit
            </button>
          </Form>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;