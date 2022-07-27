import "./Resume.scss";

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AnimatedLetters from "../AnimatedLetters";

import Button from "react-bootstrap/Button";

import resume_pdf from "../../assets/pdf/Matt_Pereira_Resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/MattPereira/personal-portfolio/main/src/assets/pdf/Matt_Pereira_Resume.pdf";

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
    <div>
      <Container fluid className="resume-section my-5">
        <h1 className="text-center text-white mb-5">
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
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row className="justify-content-center mt-5">
          <Button
            variant="warning"
            href={resume_pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <BsCloudDownload size={25} />
            &nbsp; Download PDF
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
