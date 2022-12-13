import { useState, useEffect } from "react";
import AnimatedLetters from "../../utils/AnimatedLetters";
import { Typography, Box, Container, Grid } from "@mui/material";

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
    <section id="projects">
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
          <Grid container spacing={3}>
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
