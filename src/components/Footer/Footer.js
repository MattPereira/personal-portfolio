import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";

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
            className="px-2"
          >
            <VscGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-pereira-32428a63/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href="mailto: matthewdavidpereira@gmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            <FaGoogle size={25} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
