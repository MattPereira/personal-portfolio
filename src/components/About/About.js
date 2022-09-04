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
      <h1 className="section-title mb-0">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"My ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Story".split("")}
            idx={13}
          />
        </span>
      </h1>
      <Row className="justify-content-center">
        <Col lg={6}>
          <div className="p-5 d-flex justify-content-center">
            <img src={selfie} className="img-fluid selfie" alt="selfie" />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10} className="text-white">
          <p className="lead">
            After several years of providing IT services for an
            elementary-middle school, I was tasked with improving the school’s
            lackluster WordPress website. Since I had previously been dabbling
            with learning to code for a few months, the timing was perfect for
            me to really challenge myself. After devouring a few web development
            courses on udemy, I completely rebuilt the school website using
            Express, Embedded Javascript templates, and Bootstrap. My employer
            commended me on the new site being far more aesthetically pleasing,
            organized, and easier to navigate . I found myself so enraptured by
            the whole experience that I immediately enrolled in a software
            engineering bootcamp.
          </p>
          <p className="lead">
            During my time in Springboard’s nine-month software engineering
            program, I consistently and methodically overcame the rigorous
            challenges of rapidly learning new tools and technologies. Although
            the journey was grueling at times, I gradually began to appreciate
            the struggle as my tolerance for frustration continually expanded.
            The satisfaction gleaned from finally understanding a perplexing
            concept or eventually troubleshooting an elusive bug after several
            hours of effort became increasingly intoxicating. Additionally, the
            bootcamp experience also afforded me the opportunity to collaborate
            with other programmers. I became particularly fond of helping other
            students gain a better understanding of concepts they were
            struggling with that I understood, which also helped to dramatically
            reinforce my own understanding of the material.
          </p>
          <p className="lead">
            After completing the program, I was eager to refactor and improve
            the website I had previously built for my employer. I used React to
            accomplish much of the same work I had before, but with far less
            code and much better control. Additionally, I was now confident
            enough to set up forms that allow users to send emails to the school
            and to implement a headless content management system that would
            allow the school to upload new content to the site. Building,
            updating, and improving my employer’s school website has been an
            immensely rewarding experience. I am determined to continue
            improving my skills and aspire to develop websites professionally
            for many years to come.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
