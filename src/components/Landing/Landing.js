import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import AnimatedLetters from "../../utils/AnimatedLetters";
import { Box, Typography, SvgIcon, Grid, Button } from "@mui/material";
import { ReactComponent as MPLogo } from "../../assets/svg/logos/mp_circle.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  px: 3,
  py: 1,
  borderRadius: "10px",
  fontSize: "1.25rem",
  fontFamily: "Montserrat",
  textTransform: "none",
  border: "2px solid",
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.secondary,
    border: "2px solid",
  },
}));

const Landing = () => {
  const theme = useTheme();
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = " Matt  Pereira".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section id="landing">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontSize: { xs: "325px", sm: "375px", md: "450px", lg: "550px" },
            display: "flex",
            mb: 5,
          }}
        >
          <SvgIcon
            fontSize="inherit"
            sx={{ color: theme.palette.background.paper }}
          >
            <MPLogo />
          </SvgIcon>
        </Box>

        <Typography
          variant="h1"
          sx={{
            mb: 1,
            fontFamily: "Fredoka One",
            color: theme.palette.background.paper,
            letterSpacing: "0.4rem",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem", lg: "6rem" },
          }}
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
          />
        </Typography>
        <Grid container sx={{ py: 3 }} spacing={1} justifyContent="center">
          <Grid item>
            <StyledButton
              href="https://www.linkedin.com/in/-matt-pereira-/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" /> &nbsp; GitHub
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton
              href="https://www.linkedin.com/in/-matt-pereira-/"
              target="_blank"
              rel="noreferrer"
            >
              Linked&nbsp;
              <LinkedInIcon fontSize="large" />
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Landing;
