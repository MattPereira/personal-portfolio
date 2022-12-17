import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import AnimatedLetters from "../../utils/AnimatedLetters";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import selfie from "../../assets/images/selfie.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { ReactComponent as MPLogo } from "../../assets/svg/logos/mp_circle.svg";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#EA526F",
  color: "white",
  padding: "1rem",
}));

const socials = [
  {
    url: "https://github.com/MattPereira",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    url: "https://www.linkedin.com/in/-matt-pereira-/",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    url: "https://twitter.com/__MattPereira__",
    icon: <TwitterIcon fontSize="large" />,
  },
];

const Landing = () => {
  const theme = useTheme();
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "Matt  Pereira".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section id="landing">
      <Box
        sx={{
          py: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={6} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={selfie}
                alt="selfie"
                sx={{
                  width: "75%",
                  borderRadius: "50%",
                  border: "20px solid white",
                  mb: { xs: 3, lg: 0 },
                }}
              />
            </Grid>
            <Grid item md={6} sx={{ color: theme.palette.background.paper }}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 1,
                    fontFamily: "Cubano",
                    letterSpacing: "2px",

                    fontSize: {
                      xs: "3rem",
                      sm: "3.5rem",
                      md: "3.5rem",
                      lg: "5rem",
                    },
                  }}
                >
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={11}
                  />
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h3">Full Stack Developer</Typography>
              </Box>
              <Box>
                <Grid container spacing={1}>
                  {socials.map((social) => (
                    <Grid item key={social.url}>
                      <StyledIconButton
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                      >
                        {social.icon}
                      </StyledIconButton>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Landing;
