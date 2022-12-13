import { useEffect, useState } from "react";

import AnimatedLetters from "../../utils/AnimatedLetters";

import { Typography, Container, Box } from "@mui/material";
import codeForSf from "../../assets/images/code_for_sf.png";
import hackForLa from "../../assets/images/hack_for_la.png";
import springboard from "../../assets/images/springboard.png";

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <Container sx={{ py: 5 }} id="experience">
      <Typography variant="h2" color="text.primary">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"My ".split("")}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Experience".split("")}
            idx={13}
          />
        </span>
      </Typography>
      <Box sx={{ mb: 2 }}>
        <img
          src={hackForLa}
          alt="Code for San Francisco"
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ backgroundColor: "white", mb: 2 }}>
        <img
          src={codeForSf}
          alt="Code for San Francisco"
          style={{ width: "100%" }}
        />
      </Box>

      <Box sx={{ backgroundColor: "white", padding: "2rem" }}>
        <img
          src={springboard}
          alt="Springboard Logo"
          style={{ width: "100%" }}
        />
      </Box>
    </Container>
  );
};

export default Experience;
