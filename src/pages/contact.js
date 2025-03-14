import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { State, City } from "country-state-city";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  leftColumnVariants,
  rightColumnVariants,
  useScrollAnimation,
} from "../animations/variants";

const ToastMessage = ({ showToast, onClose, toastVariant, status }) => (
  <Toast
    show={showToast}
    onClose={onClose}
    style={{
      position: "fixed",
      top: 20,
      right: 20,
      zIndex: 9999,
      minWidth: "300px",
    }}
  >
    {/* style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            minWidth: '300px',
            textAlign: 'center'
        }}> */}

    <Toast.Header
      closeButton={true}
      className={`bg-${toastVariant} text-white`}
    >
      <div className="h5 me-auto">Hexa Learning</div>
    </Toast.Header>
    <Toast.Body>
      <div className="h6">
        {status.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </Toast.Body>
  </Toast>
);

const ContactSection = () => {
  const { ref, animate } = useScrollAnimation();
  const [country, setCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [statesOptions, setStatesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    enquireFor: "",
    remarks: "",
    loading: false,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country.value);
      const stateOptions = states.map((s) => ({
        value: s.isoCode,
        label: s.name,
      }));
      setStatesOptions(stateOptions);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(country.value, state.value);
      const cityOptions = cities.map((c) => ({
        value: c.name,
        label: c.name,
      }));
      setCitiesOptions(cityOptions);
    }
  }, [state, country]);

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: "sudhakarjoshi1@gmail.com",
      phone: formData.phone,
      state: formData.state,
      city: formData.city,
      enquireFor: formData.enquireFor,
      remarks: formData.remarks,
    };

    emailjs
      .send(
        "service_s0cy0h8",
        "template_1drktp9",
        templateParams,
        "X_XH4j3cZWOip1UJ5"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            enquireFor: "",
            remarks: "",
            loading: false,
          });
          setStatus("Data sent successfully !\nWe will contact you soon.");
          setToastVariant("success");
          setShowToast(true);
        },
        (error) => {
          setStatus("Failed to send data.\nPlease try again later.");
          setToastVariant("danger");
          setShowToast(true);
          setFormData((prevState) => ({ ...prevState, loading: false }));
        }
      );
  };

  const enquiryOptions = [
    { value: "Smart Learn", label: "Smart Learn" },
    {
      value: "Chrysaalis I-Maths Franchise",
      label: "Chrysaalis I-Maths Franchise",
    },
    { value: "School Consultancy", label: "School Consultancy" },
  ];

  return (
    <>
      <section
        ref={ref}
        className="d-flex justify-content-center align-items-center py-3 px-2 px-lg-0 py-lg-5"
        id="contact"
      >
        <Container>
          <Row>
            {/* Left Column: Contact Details */}
            <Col lg={6} style={{ marginBottom: "2rem" }}>
              <motion.div
                variants={leftColumnVariants}
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
              >
                <h2 style={{ color: "#039" }}>Get in Touch</h2>
                <p>We'd love to hear from you! Reach out today.</p>
                <p>
                  <FaEnvelope style={{ color: "#039", marginRight: "10px" }} />
                  <strong>Email:</strong> sudhakarjoshi1@gmail.com
                </p>
                <p>
                  <FaPhoneAlt style={{ color: "#039", marginRight: "10px" }} />
                  <strong>Phone:</strong> +91 76194 75551
                </p>
                <div className="d-flex">
                  <FaMapMarkerAlt
                    style={{ color: "#039", marginRight: "10px" }}
                  />
                  <p className="me-2">
                    <strong>Address:</strong>
                  </p>
                  <p>
                    15 / 1, 2nd cross, Balaji Layout, Kathriguppe
                    <br /> Banashankari 3rd stage, <br />
                    Bangalore-560085
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  {/* Replace this iframe with your actual map embed */}
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6308693865685!2d77.5534937762019!3d12.931430083244368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e28836c401f%3A0x9df8642ea33fe393!2s15%2C%202nd%20Cross%20Rd%2C%20Balaji%20Layout%2C%20Kathreguppe%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1737638815626!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </Col>

            {/* Right Column: Contact Form */}
            <Col lg={6}>
              <motion.div
                variants={rightColumnVariants}
                initial="hidden"
                animate={animate ? "visible" : "hidden"}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name" className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="custom-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="email" className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="custom-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="phone" className="mb-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      className="custom-input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-flex gap-3">
                    <Form.Group
                      controlId="state"
                      className="mb-2 d-flex flex-column"
                      style={{ width: "50%" }}
                    >
                      <Form.Label>State</Form.Label>
                      <select
                        value={state ? state.value : ""}
                        onChange={(e) => {
                          handleStateChange({
                            value: e.target.value,
                            label: e.target.selectedOptions[0].label,
                          });
                          handleChange(e);
                        }}
                        disabled={!country}
                        className="custom-dropdown"
                        required
                      >
                        <option value="" disabled>
                          Select your state
                        </option>
                        {statesOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Form.Group>

                    <Form.Group
                      controlId="city"
                      className="mb-2 d-flex flex-column"
                      style={{ width: "50%" }}
                    >
                      <Form.Label>City</Form.Label>
                      <select
                        value={city ? city.value : ""}
                        onChange={(e) => {
                          handleCityChange({
                            value: e.target.value,
                            label: e.target.selectedOptions[0].label,
                          });
                          handleChange(e);
                        }}
                        disabled={!state}
                        className="custom-dropdown"
                        required
                      >
                        <option value="" disabled>
                          Select your city
                        </option>
                        {citiesOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Form.Group>
                  </div>

                  <Form.Group
                    controlId="enquireFor"
                    className="mb-2 d-flex flex-column"
                  >
                    <Form.Label>Enquire For</Form.Label>
                    <select
                      className="custom-dropdown"
                      id="enquireFor"
                      value={formData.enquireFor}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
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
                      type="text"
                      rows={3}
                      placeholder="Enter any additional information"
                      className="custom-input"
                      value={formData.remarks}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <button
                    type="submit"
                    className="prim-button"
                    disabled={formData.loading}
                  >
                    {formData.loading ? "Sending..." : "Submit"}
                  </button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastMessage
        showToast={showToast}
        onClose={() => setShowToast(false)}
        toastVariant={toastVariant}
        status={status}
        style={{ position: "absolute", top: 20, right: 20 }}
      />
    </>
  );
};

export default ContactSection;
