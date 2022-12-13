import { useEffect, useState } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import selfie from "../../assets/images/selfie.jpg";
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
      <Typography variant="h2" color="text.primary">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Who ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"I Am".split("")}
            idx={13}
          />
        </span>
      </Typography>

      <Grid container>
        <Grid item lg={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={selfie}
            alt="selfie"
            sx={{ width: "75%", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item lg={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="p" color="text.primary">
            I am a full stack web developer looking for opportunities to
            contribute to meaningful projects that have a positive impact on
            society. I am also an open source enthusiast and a fanatic of Linux
            distributions based on Debian like Ubuntu.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
