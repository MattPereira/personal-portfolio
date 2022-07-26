import { useEffect, useState } from "react";

import AnimatedLetters from "../../utils/AnimatedLetters";
import { skillsImage } from "../../utils/skillsImages";

import { Typography, Container, Grid, Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const theme = useTheme();

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
    {
      name: "Back-End",
      skills: ["nodejs", "expressjs", "postgresql", "flask"],
    },
    {
      name: "Tools",
      skills: ["git", "github", "docker", "firebase", "gcp", "figma"],
    },
  ];

  return (
    <Container sx={{ pt: 10, pb: 5 }} id="skills">
      <Box sx={{ mb: 1 }}>
        <Typography variant="h2" color="text.primary">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills".split("")}
            idx={10}
          />
        </Typography>
      </Box>

      {categories.map((category, id) => (
        <Box key={category.name}>
          <Box sx={{ mb: 1, ml: 4 }}>
            <Typography variant="h3" color="text.primary">
              {category.name}
            </Typography>
          </Box>
          <Paper
            elevation={0}
            sx={{
              mb: 3,
              backgroundColor: theme.palette.background.paper,
              p: 3,
              borderRadius: "30px",
            }}
            key={id}
          >
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
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={skillsImage(skill)}
                      alt={skill}
                      sx={{
                        objectFit: "contain",
                        width: "100%",
                        maxHeight: "100px",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="p"
                    align="center"
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    {skill}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  );
};

export default Skills;
