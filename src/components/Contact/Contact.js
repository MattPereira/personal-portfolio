import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./Contact.scss";
import selfie from "../../assets/images/selfie.jpg";
import Socials from "../Socials/Socials";

import { Row, Col, Button, Form } from "react-bootstrap";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

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
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <section className="container">
        <h1 className="section-title mb-5">
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

        <Row className="justify-content-center align-items-center">
          <Col lg={7} className="mb-5">
            <p className="text-white lead">
              I am interested in both freelance and employment opportunities.
              Prospective clients are welcome to message me using the form below
              or at &nbsp;
              <span className="pink fw-bold">
                matthewdavidpereira@gmail.com
              </span>
            </p>
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
                <Button type="submit" className="send-button">
                  SEND
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={5}>
            <div className="d-flex justify-content-center">
              <img src={selfie} className="img-fluid selfie" alt="selfie" />
            </div>
            <Socials />
          </Col>
        </Row>
      </section>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Contact;
