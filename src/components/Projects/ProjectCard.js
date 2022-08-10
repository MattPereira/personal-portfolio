import React from "react";

import { BsGithub, BsFillPlayFill } from "react-icons/bs";

import { Card, Col, Modal } from "react-bootstrap";

const ProjectCard = ({
  title,
  text,
  githubLink,
  demoLink,
  logo,
  stack,
  screenshot1,
}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className="col-11 col-md-10 col-lg-6 col-xl-4 mb-5">
        <Card className="ProjectCard text-white" onClick={handleShow}>
          <Card.Body className="text-center">
            <img className="img-fluid mb-3 mb-md-0" src={logo} alt={logo} />
            {/* <h3 className="mt-3">{title}</h3> */}
          </Card.Body>
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img className="img-fluid" src={screenshot1} alt={screenshot1} />
          </div>
          <div className="my-5">{text}</div>
          <div className="row justify-content-center mb-3">
            <div className="col-auto">
              <a href={githubLink} className="btn btn-outline-dark mx-1">
                <BsGithub size={25} /> Code
              </a>
            </div>
            <div className="col-auto">
              <a href={demoLink} className="btn btn-outline-dark mx-1">
                <BsFillPlayFill size={25} /> Live
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <small>{stack}</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
