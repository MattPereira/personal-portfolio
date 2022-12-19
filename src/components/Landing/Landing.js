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
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
}));

const socials = [
  {
    url: "https://github.com/MattPereira",
    icon: <GitHubIcon fontSize="large" />,
    color: "#070600",
  },
  {
    url: "https://www.linkedin.com/in/-matt-pereira-/",
    icon: <LinkedInIcon fontSize="large" />,
    color: "#EA526F",
  },
  {
    url: "https://twitter.com/__MattPereira__",
    icon: <TwitterIcon fontSize="large" />,
    color: "#1DA1F2",
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
          py: { xs: 15, sm: 25, lg: 40 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              item
              md={5}
              lg={5}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "350px", lg: "400px" },
                  height: { xs: "350px", lg: "400px" },
                  backgroundColor: "text.primary",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: { xs: 3, md: 0 },
                }}
              >
                {" "}
                <Box
                  component="img"
                  src={selfie}
                  alt="selfie"
                  sx={{
                    width: { xs: "300px", lg: "350px" },
                    height: { xs: "300px", lg: "350px" },
                    borderRadius: "50%",
                    position: "relative",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={7}
              lg={7}
              sx={{ color: theme.palette.background.paper }}
            >
              <Box
                sx={{
                  backgroundColor: "text.primary",
                  borderRadius: "10px",
                  textAlign: "center",
                  p: 1.5,
                  mb: 1,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Cubano",
                    letterSpacing: "3px",
                    color: "text.secondary",
                    whiteSpace: "nowrap",
                    fontSize: {
                      xs: "2.55rem",
                      sm: "4rem",
                      md: "4.5rem",
                      lg: "5.5rem",
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
                <Typography variant="h3" sx={{ color: "text.primary" }}>
                  Full Stack Developer
                </Typography>
              </Box>
              <Box>
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: { xs: "center", md: "start" } }}
                >
                  {socials.map((social) => (
                    <Grid item key={social.url}>
                      <StyledIconButton
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        sx={{ backgroundColor: social.color }}
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
