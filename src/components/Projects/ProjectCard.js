import { Grid, Paper, Box, Link, Button } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EA526F",
  color: "white",
  padding: "1rem",
  borderRadius: "15px",
  width: "100%",
  fontFamily: "Roboto",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

const ProjectCard = ({
  project: { title, image, links, description, languages, technologies },
}) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} lg={12}>
      <Paper
        elevation={0}
        sx={{
          mb: 3,
          borderRadius: "30px",
          backgroundColor: theme.palette.background.paper,
          // height: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: { xs: "250px", lg: "500px" },
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "30px",
                overflowY: "scroll",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <StyledButton
                    component={Link}
                    href={links.github}
                    variant="contained"
                    target="_blank"
                    sx={{ backgroundColor: "black" }}
                  >
                    <GitHubIcon sx={{ mr: 1 }} /> Code
                  </StyledButton>
                </Grid>
                <Grid item xs={4}>
                  <StyledButton
                    href={links.info}
                    target="_blank"
                    component={Link}
                    variant="contained"
                    sx={{ bgcolor: "#1DA1F2" }}
                  >
                    <InfoIcon sx={{ mr: 1 }} /> Info
                  </StyledButton>
                </Grid>
                <Grid item xs={4}>
                  <StyledButton
                    href={links.site}
                    target="_blank"
                    component={Link}
                    variant="contained"
                  >
                    <LanguageIcon sx={{ mr: 1 }} /> Live
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
