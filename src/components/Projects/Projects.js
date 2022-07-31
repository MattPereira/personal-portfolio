import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Row } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import no_fun_league_logo from "../../assets/images/no_fun_league.png";
import mp_logo from "../../assets/svg/logos/MP_logo_light.svg";
import ccgc_logo from "../../assets/images/ccgc_logo.png";

import portfolio_screenshot from "../../assets/images/portfolio_screenshot.png";
import nfl_screenshot from "../../assets/images/nfl_screenshot.png";
import ccgc_screenshot from "../../assets/images/ccgc_screenshot.png";

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

        <p className="lead text-white text-center fs-4">
          When learning new tools, libraries, and frameworks, I seek to fortify
          my understanding through building web applications. Select a project
          to <strong className="pink">see details and links!</strong>
        </p>

        <Row className="justify-content-center pt-5">
          <ProjectCard
            title="Contra Costa Golf Club"
            logo={ccgc_logo}
            text="A full stack web application for the Contra Costa Golf Club."
            stack="Javascript, React, Express, PostgreSQL, Bootstrap"
            githubLink="https://github.com/MattPereira/ccgc-backend"
            demoLink="https://ccgc.surge.sh/"
            screenshot1={ccgc_screenshot}
          />

          <ProjectCard
            title="No Fun League"
            logo={no_fun_league_logo}
            text="A full stack web application for my fantasy football league."
            stack="Python, Flask, PostgreSQL, Jinja, Bootstrap"
            githubLink="https://github.com/MattPereira/no_fun_league"
            demoLink="https://no-fun-league.herokuapp.com/"
            screenshot1={nfl_screenshot}
          />

          <ProjectCard
            title="Personal Portfolio"
            logo={mp_logo}
            text="The personal portfolio website you are currently visiting!"
            stack="Javascript, React, Bootstrap, CSS, HTML"
            githubLink="https://github.com/MattPereira/portfolio"
            demoLink="https://mattpereira.github.io/"
            screenshot1={portfolio_screenshot}
          />
        </Row>
      </div>
    </section>
  );
};

export default Projects;
