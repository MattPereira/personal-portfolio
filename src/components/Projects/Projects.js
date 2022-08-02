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

        <p className="lead text-white my-5 text-center fs-4">
          When learning new tools, libraries, and frameworks, I seek to fortify
          my understanding by building web applications. Select a project to{" "}
          <strong className="pink">see details and links!</strong>
        </p>

        <Row className="justify-content-center pt-5">
          <ProjectCard
            title="Contra Costa Golf Club"
            logo={ccgc_logo}
            text="
            A full stack, single page web application I built for the Contra Costa Golf Club. 
            The website displays all of the tournaments, greenies, members, courses, and standings data for the 2021-22 season. 
            All users are able to input their strokes, putts, and greenies for each round. 
            Upon submission of any new, edited, or deleted data, tour points are automatically recalculated."
            stack="Javascript, React, Express, PostgreSQL, Bootstrap"
            githubLink="https://github.com/MattPereira/ccgc-backend"
            demoLink="https://ccgc.surge.sh/"
            screenshot1={ccgc_screenshot}
          />

          <ProjectCard
            title="No Fun League"
            logo={no_fun_league_logo}
            text="
            A full stack web application I built for a fantasy football league I have been a member of for many years. 
            All of the roster, draft, and player data is sourced from the Sleeper API. 
            The site allows league members to edit their manager profile information, create blog posts, propose rule changes, and vote."
            stack="Python, Flask, PostgreSQL, Jinja, Bootstrap"
            githubLink="https://github.com/MattPereira/no_fun_league"
            demoLink="https://no-fun-league.herokuapp.com/"
            screenshot1={nfl_screenshot}
          />

          <ProjectCard
            title="Personal Portfolio"
            logo={mp_logo}
            text="Personal website for attracting potential employers and freelance clients."
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
