import { projectsData } from "../../data/projectsData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import StyledButton from "../StyledButton";

import {
  Typography,
  Grid,
  Button,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const ProjectDetails = () => {
  const { name } = useParams();

  const [readMe, setReadMe] = useState(null);
  console.log(projectsData);
  console.log(name);

  const project = projectsData.filter(
    (proj) => proj.title.toLowerCase().split(" ").join("-") === name
  )[0];

  console.log(name);
  let repoName = name;
  repoName = repoName === "contra-costa-golf-club" ? "ccgc-backend" : name;

  useEffect(
    function getAllStaff() {
      async function getProject() {
        setReadMe(
          await axios.get(
            `https://raw.githubusercontent.com/MattPereira/${repoName}/main/README.md`
          )
        );
      }
      getProject();
    },
    [repoName]
  );

  if (!readMe)
    return (
      <>
        <CircularProgress color="secondary" />
      </>
    );

  console.log(project);
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h2" color="text.primary">
        {project.title}
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item>
          <StyledButton href={project.links.github}>
            <GitHubIcon size={23} style={{ marginBottom: "3px" }} />{" "}
            <span style={{ marginLeft: "5px" }}>CODE</span>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton href={project.links.live}>
            <PlayCircleFilledWhiteIcon
              size={23}
              style={{ marginBottom: "3px" }}
            />
            <span style={{ marginLeft: "5px" }}>DEMO</span>
          </StyledButton>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ my: 5 }}>
        <Grid item lg={6}>
          <Box
            component="img"
            src={project.screenshots[0]}
            alt="ccgc screenshots"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item lg={6}>
          <Box
            component="img"
            src={project.screenshots[1]}
            alt="ccgc screenshots"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <Grid>
        <Grid item sx={{ color: "text.primary" }}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {readMe.data}
          </ReactMarkdown>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDetails;
