import { Link as RRLink } from "react-router-dom";
import { Grid, Typography, Paper, Box, Link } from "@mui/material";

const ProjectCard = ({
  project: { title, logo, links, description, languages, technologies },
}) => {
  console.log(title);

  const slug = title.toLowerCase().split(" ").join("-");
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper sx={{ mb: 5, borderRadius: "30px", backgroundColor: "white" }}>
        <Box sx={{ backgroundColor: "black", borderRadius: "30px" }}>
          <Box
            component="img"
            src={logo}
            alt={logo}
            sx={{ width: { xs: "70%", md: "100%" } }}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Grid item sx={{ mb: { xs: 3, lg: 0 } }}></Grid>
            <Grid item>
              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Typography variant="p" sx={{ color: "rgb(50,50,50)" }}>
                  {description}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ color: "rgb(50,50,50)" }}>
                <Typography variant="p">
                  <strong>
                    Links:{" "}
                    <Link
                      component={RRLink}
                      to={`/projects/${slug}`}
                      color="text.highlight"
                    >
                      Details
                    </Link>
                    ,{" "}
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
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
