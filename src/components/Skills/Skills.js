import { useEffect, useState } from "react";

import AnimatedLetters from "../../utils/AnimatedLetters";
import { skillsImage } from "../../utils/skillsImages";

import { Typography, Container, Grid, Box } from "@mui/material";
import "./Skills.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const skillsData = [
    "html",
    "css",
    "javascript",
    "python",
    "postgresql",
    "react",
    "express",
    "flask",
    "bootstrap",
    "materialui",
    "markdown",
    "git",
    "github",
    "docker",
    "firebase",
    "gcp",
    "figma",
    "ubuntu",
  ];

  return (
    <Container sx={{ py: 5 }} id="skills">
      <Typography variant="h2" color="text.primary">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"My ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills".split("")}
            idx={13}
          />
        </span>
      </Typography>

      <Grid container spacing={5}>
        {skillsData.map((skill, id) => (
          <Grid item xs={4} sm={3} md={2} lg={2} key={id}>
            <Box
              component="img"
              src={skillsImage(skill)}
              alt={skill}
              sx={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
