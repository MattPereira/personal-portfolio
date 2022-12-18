import { useEffect, useState } from "react";

import AnimatedLetters from "../../utils/AnimatedLetters";
import { skillsImage } from "../../utils/skillsImages";

import { Typography, Container, Grid, Box, Paper } from "@mui/material";
import "./Skills.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const categories = [
    { name: "Languages", skills: ["javascript", "python", "markdown"] },
    {
      name: "Front-End",
      skills: ["html", "css", "react", "bootstrap", "materialui"],
    },
    { name: "Back-End", skills: ["express", "flask", "postgresql", "nodejs"] },
    {
      name: "Tools",
      skills: ["git", "github", "docker", "figma", "firebase", "gcp"],
    },
  ];

  return (
    <Container sx={{ mt: 5 }} id="skills">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h2" color="text.primary">
          <span className="pink">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Skills".split("")}
              idx={10}
            />
          </span>
        </Typography>
      </Box>

      {categories.map((category, id) => (
        <Paper
          elevation={0}
          sx={{
            mb: 5,
            backgroundColor: "grey.800",
            px: 5,
            py: 2,
            borderRadius: "30px",
          }}
          key={id}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" color="text.primary">
              {category.name}
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {Object.values(category.skills).map((skill, id) => (
              <Grid
                item
                xs={4}
                sm={3}
                md={2}
                lg={2}
                key={id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={skillsImage(skill)}
                  alt={skill}
                  sx={{ width: "100%", maxHeight: "150px", mb: 1 }}
                />

                <Typography
                  variant="p"
                  align="center"
                  sx={{
                    color: "text.primary",
                    // marginTop: "auto",
                  }}
                >
                  {skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Skills;
