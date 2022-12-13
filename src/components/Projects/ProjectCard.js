import { Link as RRLink } from "react-router-dom";
import { Grid, Typography, Paper, Box, Link } from "@mui/material";

const ProjectCard = ({
  project: { title, logo, links, description, languages, technologies },
}) => {
  console.log(title);
  return (
    <Grid item xs={12}>
      <Paper sx={{ mb: 5, borderRadius: "30px", backgroundColor: "white" }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={logo}
                sx={{ width: "70%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ p: 3 }}>
              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Typography variant="p" sx={{ color: "rgb(50,50,50)" }}>
                  {description}
                </Typography>
              </Box>
              <Box sx={{ color: "rgb(50,50,50)" }}>
                <Typography variant="p">
                  <strong>
                    Links:{" "}
                    <Link href={links.github} color="text.highlight">
                      GitHub
                    </Link>
                    ,{" "}
                    <Link href={links.github} color="text.highlight">
                      Site
                    </Link>
                  </strong>
                </Typography>
              </Box>
              <Box sx={{ color: "rgb(50,50,50)" }}>
                <Typography variant="p">
                  <strong>Languages: </strong>
                  {languages}
                </Typography>
              </Box>
              <Box sx={{ color: "rgb(50,50,50)" }}>
                <Typography variant="p">
                  <strong>Technologies: </strong>
                  {technologies}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
