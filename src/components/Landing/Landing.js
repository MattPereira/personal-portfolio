import { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import Type from "./Type";
import AnimatedLetters from "../AnimatedLetters";
import Socials from "../Socials/Socials";

import { Box, Typography } from "@mui/material";

import logo from "../../assets/images/mp/mp_cut_out_white.svg";

const Landing = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = " Matt  Pereira".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Particles options={particlesOptions} init={particlesInit} />
        <Box
          component="img"
          src={logo}
          alt="mp-logo"
          sx={{ width: { xs: "70%", md: "60%", lg: "40%" }, mb: 5, zIndex: 1 }}
        />
        <Typography
          variant="h1"
          sx={{
            mb: 1,
            fontFamily: "Fredoka One",
            color: "white",
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
        <Box>
          <Type />
        </Box>
        <Socials />
      </Box>
    </>
  );
};

export default Landing;
