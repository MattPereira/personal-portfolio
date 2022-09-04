import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./Contact.scss";
import selfie from "../../assets/images/selfie.jpg";

import { Row, Col, Button, Form, Alert } from "react-bootstrap";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  const [status, setStatus] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtgulno",
        "template_kc3t8nf",
        form.current,
        "BLYUfnfW6-k4FzoTv"
      )
      .then(
        () => {
          setStatus(true);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );
  };

  return (
    <>
      <section className="container py-xl-5">
        <h1 className="section-title mb-md-5 mb-0">
          <span className="pink">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact".split("")}
              idx={10}
            />
          </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={" Me!".split("")}
            idx={17}
          />
        </h1>

        <Row className="justify-content-center align-items-center py-5">
          <Col lg={5} xl={6}>
            <div className="d-flex justify-content-center text-center mb-5">
              <img
                src={selfie}
                className="img-fluid rounded-circle selfie"
                alt="selfie"
              />
            </div>
          </Col>
          <Col lg={7} xl={6} className="mb-5">
            <p className="text-white lead">
              I am interested in both freelance and employment opportunities.
              Prospective clients are welcome to message me using the form
              below!
            </p>
            {status === true ? (
              <Alert variant="success">
                Message successfully sent! I will respond as soon as possible!
              </Alert>
            ) : status === false ? (
              <Alert variant="danger">
                Failed to send the message, but you can email me directly at{" "}
                <a href="mailto:matthewdavidpereira@gmail.org">
                  matthewdavidpereira@gmail.org
                </a>
              </Alert>
            ) : null}
            <div>
              <Form ref={form} onSubmit={sendEmail} className="text-end">
                <div className="name-input mb-2">
                  <Form.Control
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="email-input mb-2">
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="message-input mb-2">
                  <Form.Control
                    placeholder="Message"
                    as="textarea"
                    rows="5"
                    name="message"
                    required
                  />
                </div>
                <Button type="submit" className="send-button fw-bold">
                  SEND
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Contact;
