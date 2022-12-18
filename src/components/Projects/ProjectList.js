import { useState, useEffect } from "react";
import AnimatedLetters from "../../utils/AnimatedLetters";
import { Typography, Box, Container, Grid } from "@mui/material";

import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section id="projects">
      <Container sx={{ py: 5 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h2" color="text.primary">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Projects".split("")}
              idx={10}
            />
          </Typography>
        </Box>

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
