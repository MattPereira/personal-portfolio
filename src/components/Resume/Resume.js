import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

import { Container, Box, Typography } from "@mui/material";
import StyledButton from "../StyledButton";

import resume_pdf from "../../assets/Matt_Pereira_Resume.pdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/MattPereira/personal-portfolio/main/src/assets/Matt_Pereira_Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [letterClass, setLetterClass] = useState("text-animate");

  const myRecent = "My ".split("");
  const projects = "Resume".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  // window.addEventListener(
  //   "resize",
  //   useEffect(() => {
  //     setWidth(window.innerWidth);
  //   }, [])
  // );

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h2" color="text.primary">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={myRecent}
          idx={10}
        />
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projects}
            idx={13}
          />
        </span>
      </Typography>

      <Box sx={{ textAlign: "center", mb: 5 }}>
        <StyledButton
          href={resume_pdf}
          target="_blank"
          sx={{ color: "white", borderColor: "white", px: 5 }}
        >
          <CloudDownloadIcon />
          &nbsp; Download PDF
        </StyledButton>
      </Box>
      <Box>
        <Document file={resumeLink}>
          <Page pageNumber={1} scale={width > 1100 ? 1.7 : 0.6} />
        </Document>
      </Box>
    </Container>
  );
}

export default ResumeNew;
