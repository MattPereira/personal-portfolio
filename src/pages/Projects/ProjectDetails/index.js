import { projectsData } from "../../../data/projectsData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Row, Col, Accordion } from "react-bootstrap";

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

  if (!readMe) return <>LOADING...</>;

  console.log(project);
  return (
    <section className="py-5 text-white">
      <h1 className="text-center text-white display-3 mb-5">{project.title}</h1>
      <Row className="mb-5">
        <Col lg={6}>
          {/* <img
            src={project.images[0]}
            alt="ccgc screenshots"
            className="img-fluid"
          /> */}
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>README.md</Accordion.Header>
              <Accordion.Body>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {readMe.data}
                </ReactMarkdown>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Biggest Obstacles</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Trade Offs</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Future Plans</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default ProjectDetails;
