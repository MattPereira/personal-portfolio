import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ detailsLink, githubLink, demoLink, logo, title }) => {
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
      </Col>
    </>
  );
};

export default ProjectCard;
