import "./About.scss";
import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";

import selfie from "../../assets/images/selfie.jpg";
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const who = "Who ".split("");
  const iAm = "I Am".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section className="my-5 py-5">
      <h1 className="section-title">
        <AnimatedLetters letterClass={letterClass} strArray={who} idx={10} />
        <span className="pink">
          <AnimatedLetters letterClass={letterClass} strArray={iAm} idx={13} />
        </span>
      </h1>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="p-5 d-flex justify-content-center">
            <img src={selfie} className="img-fluid selfie" alt="selfie" />
          </div>
        </Col>
        <Col lg={6} className="text-white">
          <p className="lead">
            I'm an aspiring full-stack web developer seeking a role that will
            afford me the opportunity to continually improve my skills and grow
            professionally.
          </p>
          <p className="lead">
            I'm quietly confident, naturally curious, and perpetually focused on
            cultivating my technical prowess one project at a time. I enjoy
            collaborating with a team to build projects that are both functional
            and aesthetically pleasing.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;