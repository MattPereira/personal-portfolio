import "./Projects.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Row } from "react-bootstrap";
import { Typography, Box, Container } from "@mui/material";

import ProjectCard from "./ProjectCard";

import nfl_logo from "../../assets/images/no_fun_league.png";
import ccgc_logo from "../../assets/images/ccgc_logo.png";
import ts_logo from "../../assets/images/ts_logo.png";

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
    <Container sx={{ py: 5 }}>
      <Typography variant="h2" color="text.primary" textAlign="center">
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
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="p" color="text.primary">
          Select a project to see <span className="pink">details</span>
          &nbsp;and&nbsp;
          <span className="pink">links!</span>
        </Typography>
      </Box>

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
    </Container>
  );
};

export default Projects;
