import "./Stack.scss";
import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";

import TechStack from "./Techstack";

import AnimatedLetters from "../AnimatedLetters";

const Stack = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const myTechnology = "My Technology ".split("");
  const stack = "Stack".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="Stack">
      <h1 className="text-center text-white mb-md-5">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={myTechnology}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={stack}
            idx={24}
          />
        </span>
      </h1>

      <TechStack />
    </section>
  );
};

export default Stack;
