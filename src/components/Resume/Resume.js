import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

import { Container, Button, Box } from "@mui/material";

import resume_pdf from "../../assets/Matt_Pereira_Resume.pdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/MattPereira/personal-portfolio/main/src/assets/Matt_Pereira_Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [letterClass, setLetterClass] = useState("text-animate");

  const myRecent = "My ".split("");
  const projects = "Resume".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <h1 className="section-title">
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
      </h1>

      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Button
          variant="outlined"
          href={resume_pdf}
          target="_blank"
          sx={{ color: "white", borderColor: "white", px: 5 }}
        >
          <CloudDownloadIcon />
          &nbsp; Download PDF
        </Button>
      </Box>
      <Box>
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Box>
    </Container>
  );
}

export default ResumeNew;
