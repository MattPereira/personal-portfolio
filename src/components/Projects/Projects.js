import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Typography, Box, Container } from "@mui/material";

import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const myRecent = "My ".split("");
  const projects = "Projects".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  console.log(projectsData);
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h2" color="text.primary">
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

      <Box>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
