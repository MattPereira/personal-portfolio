import { projectsData } from "../../../data/projectsData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Row, Col, Button, Spinner } from "react-bootstrap";
import { BsGithub, BsPlayCircleFill } from "react-icons/bs";

const ProjectDetails = () => {
  const { name } = useParams();

  const [readMe, setReadMe] = useState(null);
  console.log(projectsData);
  console.log(name);

  const project = projectsData.filter(
    (proj) => proj.title.toLowerCase().split(" ").join("-") === name
  )[0];

  useEffect(
    function getAllStaff() {
      async function getProject() {
        setReadMe(
          await axios.get(
            `https://raw.githubusercontent.com/MattPereira/${project.repoName}/main/README.md`
          )
        );
      }
      getProject();
    },
    [project.repoName]
  );

  if (!readMe)
    return (
      <>
        <Spinner animation="border" variant="light" />
      </>
    );

  console.log(project);
  return (
    <section className="py-5 text-white">
      <h1 className="text-center text-white display-3 mb-5">{project.title}</h1>
      <Row className="justify-content-center mb-5">
        <Col className="col-auto">
          <Button variant="outline-light" size={"lg"} href={project.githubLink}>
            <BsGithub size={23} style={{ marginBottom: "3px" }} /> Code
          </Button>
        </Col>
        <Col className="col-auto">
          <Button variant="outline-light" size={"lg"} href={project.demoLink}>
            <BsPlayCircleFill size={23} style={{ marginBottom: "3px" }} />{" "}
            {"  "}
            Demo
          </Button>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={6}>
          <img
            src={project.screenshots[0]}
            alt="ccgc screenshots"
            className="img-fluid"
          />
        </Col>
        <Col lg={6}>
          <img
            src={project.screenshots[1]}
            alt="ccgc screenshots"
            className="img-fluid d-none d-lg-flex"
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {readMe.data}
          </ReactMarkdown>
        </Col>
      </Row>
    </section>
  );
};

export default ProjectDetails;
