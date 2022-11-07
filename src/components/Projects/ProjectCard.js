import { Link } from "react-router-dom";
import { Grid, Typography, Paper, Box } from "@mui/material";

const ProjectCard = ({
  project: { title, logo, links, description, languages, technologies },
}) => {
  console.log(title);

  const slug = title.toLowerCase().split(" ").join("-");
  return (
    <Paper sx={{ mb: 4, borderRadius: "20px" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            backgroundColor: "black",
            borderRadius: { xs: "20px 20px 0 0", md: "20px 0 0 20px" },
          }}
        >
          <Link to={`/projects/${slug}`} className="text-decoration-none">
            <Box
              component="img"
              src={logo}
              alt={logo}
              sx={{ height: "100%", width: "100%" }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={7} sx={{ p: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              component={Link}
              to={`/projects/${slug}`}
              variant="h3"
              color="text.highlight"
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="p" color="text.secondary">
              {description}
            </Typography>
          </Box>

          <div>
            <Typography variant="p" color="text.secondary">
              <strong>Links: </strong>
              <Link to={`/projects/${slug}`}>Details</Link>,{" "}
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              ,{" "}
              <a href={links.github} target="_blank" rel="noreferrer">
                Site
              </a>
            </Typography>
          </div>
          <div>
            <Typography variant="p" color="text.secondary">
              <strong>Languages: </strong>
              {languages}
            </Typography>
          </div>
          <div>
            <Typography variant="p" color="text.secondary">
              <strong>Technologies: </strong>
              {technologies}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
