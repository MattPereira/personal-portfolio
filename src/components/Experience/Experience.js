import { useEffect, useState } from "react";
import AnimatedLetters from "../../utils/AnimatedLetters";

import { Typography, Container, Box, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import codeForSf from "../../assets/images/code_for_sf.png";
import hackForLa from "../../assets/images/hack_for_la.png";
import springboard from "../../assets/images/springboard.png";

const experiences = [
  {
    title: "Web Developer",
    image: codeForSf,
    description:
      "Code for San Francisco is a volunteer organization that works with local government to improve the lives of San Franciscans through technology.",
  },
  {
    title: "Software Engineer",
    image: hackForLa,
    description:
      "Hack for LA is a volunteer organization that works with local government to improve the lives of Los Angeles residents through technology. ",
  },
  {
    title: "Peer Mentor",
    image: springboard,
    description:
      "Springboard is a full-stack software engineering bootcamp. After earning my certification, I started volunteering as a peer mentor.",
  },
];

export default function Experience() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <Container sx={{ py: 5 }} id="experience">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" color="text.primary">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Experience".split("")}
            idx={10}
          />
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {experiences.map((experience, id) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={id}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "30px",
                backgroundColor: theme.palette.background.paper,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "200px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={experience.image}
                  alt={experience.title}
                  style={{ width: "100%" }}
                />
              </Box>

              <Box sx={{ p: 3 }}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h4" color="text.primary">
                    {experience.title}
                  </Typography>
                </Box>

                <Typography variant="body1" color="text.primary">
                  {experience.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
