import "./Landing.scss";
import { useState, useEffect } from "react";

import Type from "./Type";
import AnimatedLetters from "../AnimatedLetters";
import Socials from "../Socials/Socials";

import logo from "../../assets/svg/logos/MP_LOGO_LIGHT.svg";

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
      <Socials />
    </section>
  );
};

export default Landing;
