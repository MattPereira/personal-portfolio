import "./Skills.scss";
import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import AnimatedLetters from "../AnimatedLetters";

import { skillsImage } from "../../utils/skillsImage";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const skillsData = [
    "html",
    "css",
    "javascript",
    "react",
    "express",
    "postgresql",
    "python",
    "flask",
    "bootstrap",
    "git",
    "heroku",
    "ubuntu",
  ];

  const skillBoxStyle = {
    backgroundColor: "#F7F7FF",
    boxShadow: `0px 0px 30px #F7F7FF`,
  };

  return (
    <section className="Skills my-5 py-5">
      <h1 className="section-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"My ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills".split("")}
            idx={13}
          />
        </span>
      </h1>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "#070600" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;