import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col className="col-auto">
          <a
            href="https://github.com/MattPereira"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub size={25} />
          </a>
          <a
            href="mailto: matthewdavidpereira@gmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5"
          >
            <FiMail size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-pereira-32428a63/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
