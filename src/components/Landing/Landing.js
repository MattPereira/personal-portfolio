import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import AnimatedLetters from "../AnimatedLetters";
import Socials from "../Socials/Socials";
import { Box, Typography, SvgIcon } from "@mui/material";
import { ReactComponent as MPLogo } from "../../assets/svg/logos/mp_circle.svg";

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
      <Socials />
    </Box>
  );
};

export default Landing;
