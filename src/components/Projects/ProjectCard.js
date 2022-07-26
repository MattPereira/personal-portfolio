import React from "react";

import { BsGithub, BsFillPlayFill } from "react-icons/bs";

import { Card, Button, Col } from "react-bootstrap";

const ProjectCard = ({ title, text, githubLink, demoLink, image, stack }) => {
  return (
    <Col className="col-10 col-md-6 col-lg-4 mb-5">
      <Card className="bg-light">
        <Card.Img variant="top" src={image} className="p-5" />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>

          <Card.Text className="ProjectCard-text">{text}</Card.Text>

          <a href={githubLink} className="btn btn-primary mx-1">
            <BsGithub size={25} />
          </a>

          <a href={demoLink} className="btn btn-primary mx-1">
            <BsFillPlayFill size={25} />
          </a>
        </Card.Body>
        <Card.Footer>
          <small class="text-muted">{stack}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
