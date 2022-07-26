import "./About.scss";
import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";

import Stack from "../Stack/Stack";
import selfie from "../../assets/images/selfie.jpg";

import AnimatedLetters from "../AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const letMe = "Let Me ".split("");
  const introduce = "Introduce ".split("");
  const myself = "Myself".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="About text-white">
          <h1 className="text-center text-white mb-md-5">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={letMe}
              idx={10}
            />
            <span className="pink">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={introduce}
                idx={17}
              />
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myself}
              idx={25}
            />
          </h1>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="p-5 d-flex">
                <img src={selfie} className="img-fluid selfie" alt="selfie" />
              </div>
            </Col>
            <Col md={6}>
              <p className="lead">
                I'm an aspiring full-stack web developer looking for a role that
                will afford me the opportunity to steadily improve my skills and
                grow professionally.
              </p>
              <p className="lead">
                I'm quietly confident, naturally curious, and perpetually
                focused on improving my talents one project at a time.
              </p>
            </Col>
          </Row>
        </div>
      </section>
      <Stack />
    </>
  );
};

export default About;
