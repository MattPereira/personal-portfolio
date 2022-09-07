import "./About.scss";
import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";

import selfie from "../../assets/images/selfie.jpg";
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section className="my-5 py-5">
      <h1 className="section-title mb-5">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Who ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"I Am".split("")}
            idx={13}
          />
        </span>
      </h1>

      <Row className="justify-content-center align-items-center">
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <img src={selfie} className="img-fluid selfie" alt="selfie" />
          </div>
        </Col>
        <Col lg={6} className="text-white">
          <p className="lead">
            I'm an aspiring full-stack web developer seeking a role that will
            afford me the opportunity to make a positive impact. I am passionate
            about building full stack web applications that satisfy
            stakeholders' expectations.
          </p>
          <p className="lead">
            I am naturally inquisitive and perpetually focused on cultivating
            new skills. I'm instinctively sedulous and conscientious. I am
            detail-oriented, humble, and pragmatic.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
