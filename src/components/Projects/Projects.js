import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Row } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import nfl_logo from "../../assets/images/no_fun_league.png";
import ccgc_logo from "../../assets/images/ccgc_logo.png";
import ts_logo from "../../assets/images/TS_LOGO_CIRCLE.png";

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
    <section className="py-5 my-5">
      <div className="Projects">
        <h1 className="section-title">
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

        <p className="lead text-white text-center my-5 fs-4">
          Select a project to see <strong className="pink">details</strong>
          &nbsp;and&nbsp;
          <strong className="pink">links!</strong>
        </p>

        <Row className="justify-content-center py-5">
          <ProjectCard
            title="Contra Costa Golf Club"
            logo={ccgc_logo}
            githubLink="https://github.com/MattPereira/ccgc-backend"
            demoLink="https://ccgc.surge.sh/"
          />

          <ProjectCard
            title="No Fun League"
            logo={nfl_logo}
            githubLink="https://github.com/MattPereira/no_fun_league"
            demoLink="https://no-fun-league.up.railway.app/"
          />
          <ProjectCard
            title="Tabernacle School"
            logo={ts_logo}
            githubLink="https://github.com/MattPereira/tabernacle.school"
            demoLink="https://tabernacle.school/"
          />
        </Row>
      </div>
    </section>
  );
};

export default Projects;
