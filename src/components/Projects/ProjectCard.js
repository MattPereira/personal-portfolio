import { Link as RRLink } from "react-router-dom";
import { Grid, Typography, Paper, Box, Link } from "@mui/material";

const ProjectCard = ({
  project: { title, logo, links, description, languages, technologies },
}) => {
  console.log(title);

  const slug = title.toLowerCase().split(" ").join("-");
  return (
    <Paper sx={{ mb: 5, borderRadius: "20px", backgroundColor: "white" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "black",
            borderRadius: { xs: "20px 20px 0 0", md: "20px 0 0 20px" },
            textAlign: "center",
          }}
        >
          <RRLink to={`/projects/${slug}`} className="text-decoration-none">
            <Box
              component="img"
              src={logo}
              alt={logo}
              sx={{ width: { xs: "70%", md: "100%" } }}
            />
          </RRLink>
        </Grid>
        <Grid item xs={12} md={8} sx={{ p: 3 }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Grid item sx={{ mb: { xs: 3, lg: 0 } }}>
              <Box>
                <Typography
                  component={RRLink}
                  to={`/projects/${slug}`}
                  variant="h3"
                  color="text.highlight"
                >
                  {title}
                </Typography>
              </Box>
            </Grid>
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
