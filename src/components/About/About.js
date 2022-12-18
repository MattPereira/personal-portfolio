import { useEffect, useState } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import AnimatedLetters from "../../utils/AnimatedLetters";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <Container sx={{ py: 5 }} id="about">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" color="text.primary">
          <span className="pink">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About".split("")}
              idx={10}
            />
          </span>
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="p" color="text.primary">
            I am a full stack web developer looking for opportunities to
            contribute to meaningful projects that make a positive impact. Linux
            Fanatic.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
