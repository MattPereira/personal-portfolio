import { Link } from "react-router-dom";

// import { BsGithub, BsFillPlayFill } from "react-icons/bs";

import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ detailsLink, githubLink, demoLink, logo, title }) => {
  // const [show, setShow] = React.useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Col className="col-11 col-md-8 col-lg-7 col-xl-4 mb-5">
        <Link
          to={`/projects/${title.toLowerCase().split(" ").join("-")}`}
          className="text-decoration-none"
        >
          <h5 className="text-center text-white fs-3 fw-bold">{title}</h5>
          <Card className="ProjectCard text-white ">
            <Card.Body className="text-center">
              <img className="img-fluid mb-3 mb-md-0" src={logo} alt={logo} />
            </Card.Body>
          </Card>
        </Link>
        {/* <Row className="justify-content-center mt-3">
          <Col className="col-auto">
            <Link
              to={`/projects/${detailsLink}`}
              className="btn btn-outline-light rounded-pill"
            >
              Details
            </Link>
          </Col>
          <Col className="col-auto">
            <a href={githubLink} className="btn btn-outline-light rounded-pill">
              <BsGithub size={20} /> Code
            </a>
          </Col>
          <Col className="col-auto">
            <a href={demoLink} className="btn btn-outline-light rounded-pill">
              <BsFillPlayFill size={25} /> Live
            </a>
          </Col>
        </Row> */}
      </Col>
      {/* <Modal show={show} onHide={handleClose} size="lg" centered>
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
      </Modal> */}
    </>
  );
};

export default ProjectCard;
