import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const myRecent = "My ".split("");
  const projects = "Projects".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="py-5">
      <div className="Projects">
        <h1 className="text-center text-white">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={myRecent}
            idx={10}
          />
          <span className="pink">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projects}
              idx={13}
            />
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Projects;
