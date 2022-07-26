import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPostgresql,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

import { SiFlask, SiBootstrap } from "react-icons/si";
import { SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row className="text-center justify-content-center">
      <Col xs={4} md={2} className="tech-icons d-flex justify-content-center">
        <div>
          <DiHtml5 color="#e34c26" size={60} />
        </div>
        <span>HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiCss3 color="#264de4" size={60} />
        </div>
        <span>CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiJavascript1 color="#f7df1e" size={60} />
        </div>
        <span>JAVASCRIPT</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="#61DBFB" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql color="#F7F7FF" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress color="#F7F7FF" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython color="#ffde57" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask color="#F7F7FF" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#f34f29" size={60} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap color="#7A43B6" size={60} />
      </Col>
    </Row>
  );
}

export default Techstack;
