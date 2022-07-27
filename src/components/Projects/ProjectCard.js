import React from "react";

import { BsGithub, BsFillPlayFill } from "react-icons/bs";

import { Card, Col, Row } from "react-bootstrap";

const ProjectCard = ({ title, text, githubLink, demoLink, image, stack }) => {
  return (
    <Col className="col-10 col-md-10 col-lg-4 mb-5">
      <Card className="ProjectCard text-white">
        <Card.Header className="text-center fs-3 fw-bold">{title}</Card.Header>
        <Card.Body className="text-center">
          <Row className="align-items-center p-3">
            <Col className="col-12 col-md-6">
              <img className="img-fluid mb-3 mb-md-0" src={image} alt={image} />
            </Col>
            <Col className="col-12 col-md-6">
              <Card.Text className="ProjectCard-text">{text}</Card.Text>
              <a href={githubLink} className="btn btn-outline-light mx-1">
                <BsGithub size={25} />
              </a>

              <a href={demoLink} className="btn btn-outline-light mx-1">
                <BsFillPlayFill size={25} />
              </a>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-white">{stack}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
