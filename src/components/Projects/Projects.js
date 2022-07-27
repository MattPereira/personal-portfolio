import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Row } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import no_fun_league_logo from "../../assets/images/no_fun_league.png";
import mp_logo from "../../assets/svg/logos/MP_logo_light.svg";
import ccgc_logo from "../../assets/images/ccgc_logo.png";

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
        <h1 className="text-center text-white mb-5">
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

        <Row className="justify-content-center pt-5">
          <ProjectCard
            title="Contra Costa Golf Club"
            image={ccgc_logo}
            text="A full stack web application for the Contra Costa Golf Club."
            stack="Javascript, React, Express, PostgreSQL, Bootstrap"
            githubLink="https://github.com/MattPereira/ccgc-backend"
            demoLink="https://ccgc.surge.sh/"
          />

          <ProjectCard
            title="No Fun League"
            image={no_fun_league_logo}
            text="A full stack web application for my personal fantasy football league."
            stack="Python, Flask, PostgreSQL, Jinja, Bootstrap"
            githubLink="https://github.com/MattPereira/no_fun_league"
            demoLink="https://no-fun-league.herokuapp.com/"
          />

          <ProjectCard
            title="Personal Portfolio"
            image={mp_logo}
            text="The personal portfolio website you are currently visiting!"
            stack="Javascript, React, Bootstrap, CSS, HTML"
            githubLink="https://github.com/MattPereira/portfolio"
            demoLink="https://mattpereira.github.io/"
          />
        </Row>
      </div>
    </section>
  );
};

export default Projects;
