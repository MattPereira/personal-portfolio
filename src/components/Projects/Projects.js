import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Row } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import nfl_logo from "../../assets/images/no_fun_league.png";
// import mp_logo from "../../assets/svg/logos/MP_LOGO_LIGHT.svg";
import ccgc_logo from "../../assets/images/ccgc_logo.png";
import ts_logo from "../../assets/images/TS_LOGO_CIRCLE.png";

// import portfolio_screenshot from "../../assets/images/portfolio_screenshot.png";
import nfl_screenshot from "../../assets/images/nfl_screenshot.png";
import ccgc_screenshot from "../../assets/images/ccgc_screenshot.png";
import ts_screenshot from "../../assets/images/ts_screenshot.png";

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
          Select a project to see <strong className="blue">details</strong>
          &nbsp;and&nbsp;
          <strong className="blue">links!</strong>
        </p>

        <Row className="justify-content-center">
          <ProjectCard
            title="Contra Costa Golf Club"
            logo={ccgc_logo}
            text="
            A full stack, single page web application I built for a local golf club. The site displays all of the tournaments, greenies, members, courses, and standings data. All users are able to input their strokes, putts, and greenies for each round. Upon submission of any new, edited, or deleted data, tour points are automatically recalculated. Features include a custom built internal API, full CRUD, user authentication, multi-tiered authorization levels, and a tour points system that incorporates handicaps to determine an overall champion based on all rounds inputted for the year. "
            stack="Javascript, React, Express, PostgreSQL, Bootstrap"
            githubLink="https://github.com/MattPereira/ccgc-backend"
            demoLink="https://ccgc.surge.sh/"
            screenshot1={ccgc_screenshot}
          />

          <ProjectCard
            title="No Fun League"
            logo={nfl_logo}
            text="
            A full stack web application I built for a personal fantasy football league. All of the roster, draft, and player data is sourced from the Sleeper API. The site serves the members of the league by providing them with updated information about their rosters and past league drafts. Additionally, the site allows league members to edit their manager profile information, create blog posts, propose rule changes, and vote on those proposed rule changes. "
            stack="Python, Flask, PostgreSQL, Jinja, Bootstrap"
            githubLink="https://github.com/MattPereira/no_fun_league"
            demoLink="https://no-fun-league.herokuapp.com/"
            screenshot1={nfl_screenshot}
          />

          <ProjectCard
            title="Tabernacle School"
            logo={ts_logo}
            text="Informational and functional website I built for my current employer. The site advertises to prospective families and provides current families with essential documents, calendars, and instructions. Features include personal pages for all school staff and astute incorporation of Bootstrap’s layout, content, and components functionalities."
            stack="Javascript, Express, EJS, Bootstrap, Sass"
            githubLink="https://github.com/MattPereira/tabernacle.school"
            demoLink="https://tabernacle.school/"
            screenshot1={ts_screenshot}
          />

          {/* <ProjectCard
            title="Personal Portfolio"
            logo={mp_logo}
            text="A single page application used to attract employers and freelance clients. Features include animated text, an infinite carousel slider displaying all my skills, and a contact form that allows users to send a message to my email."
            stack="Javascript, React, Bootstrap, CSS, HTML"
            githubLink="https://github.com/MattPereira/portfolio"
            demoLink="https://matt-pereira.surge.sh/"
            screenshot1={portfolio_screenshot}
          /> */}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
