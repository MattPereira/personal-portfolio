import "./Landing.scss";

import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Type from "./Type";
import AnimatedLetters from "../AnimatedLetters";

import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import logo from "../../assets/svg/logos/MP_logo_light.svg";

const Landing = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = " Matt Pereira".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section className="Landing">
      <img src={logo} className="img-fluid mp-logo" alt="mp-logo" />
      <h1 className="text-white mt-5 Landing-name">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={11}
        />
      </h1>
      <div>
        <Type />
      </div>
      <Row>
        <div className="my-5">
          <a
            href="https://www.linkedin.com/in/-matt-pereira-/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn gmail"
          >
            <FiMail size={25} />
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
    </section>
  );
};

export default Landing;
