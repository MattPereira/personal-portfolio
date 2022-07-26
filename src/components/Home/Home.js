import "./Home.scss";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import AnimatedLetters from "../AnimatedLetters";

import { FaLinkedinIn, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

import logo from "../../assets/svg/logos/MP_logo_light.svg";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = " Matt Pereira".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="Home">
      <div className="Intro py-md-5">
        <Row className="align-items-center">
          <Col md={6} className="order-2 order-md-1">
            <Row className="justify-content-center">
              <Col className="px-5">
                <h1 className="text-white mb-0">
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <strong className="Intro-name">
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={nameArray}
                      idx={15}
                    />
                  </strong>
                </h1>
                <div>
                  <Type />
                </div>
                <Row>
                  <div className="my-3">
                    <a
                      href="https://www.linkedin.com/in/-matt-pereira-/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn google"
                    >
                      <FaGoogle size={25} />
                    </a>

                    <a
                      href="https://twitter.com/__MattPereira__"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn twitter"
                    >
                      <FaTwitter size={25} />
                    </a>

                    <a
                      href="https://github.com/MattPereira"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn github"
                    >
                      <FaGithub size={28} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/-matt-pereira-/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn linkedin"
                    >
                      <FaLinkedinIn size={25} />
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            md={6}
            className="order-1 order-md-2 d-flex justify-content-center"
          >
            <img src={logo} className="img-fluid mp-logo p-5" alt="brand" />
          </Col>
        </Row>
      </div>
      <About />
      <Projects />
    </div>
  );
};

export default Home;
