import { Grid, Typography, Paper, Box, Link, Button } from "@mui/material";

import { styled } from "@mui/material/styles";

import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EA526F",
  color: "white",
  padding: "1rem",
  borderRadius: "30px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#EA526F",
    color: "white",
  },
}));

const ProjectCard = ({
  project: { title, logo, links, description, languages, technologies },
}) => {
  return (
    <Grid item xs={12} lg={6}>
      <Paper
        sx={{
          mb: 5,
          borderRadius: "30px",
          backgroundColor: "#424242",
          height: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <StyledButton
                    component={Link}
                    href={links.github}
                    variant="contained"
                  >
                    <CodeIcon /> Code
                  </StyledButton>
                </Grid>
                <Grid item xs={6}>
                  <StyledButton
                    href={links.github}
                    component={Link}
                    variant="contained"
                  >
                    <LanguageIcon /> Site
                  </StyledButton>
                </Grid>
              </Grid>
              {/* <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Typography variant="p" sx={{ color: "text.primary" }}>
                  {description}
                </Typography>
              </Box> */}

              <Box>
                <Typography variant="p">
                  {languages}, {technologies}
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
