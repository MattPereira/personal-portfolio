import { Grid, Paper, Box, Link, Button } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EA526F",
  color: "white",
  padding: "1rem",
  borderRadius: "15px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#EA526F",
    color: "white",
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
          // mb: 5,
          borderRadius: "30px",
          backgroundColor: theme.palette.background.paper,
          // height: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            {/* <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "30px",
                textAlign: "center",
              }}
            > */}
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
              }}
            />
            {/* </Box> */}
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <StyledButton
                    component={Link}
                    href={links.github}
                    variant="contained"
                    target="_blank"
                  >
                    <CodeIcon /> Code
                  </StyledButton>
                </Grid>
                <Grid item xs={6}>
                  <StyledButton
                    href={links.site}
                    target="_blank"
                    component={Link}
                    variant="contained"
                  >
                    <LanguageIcon /> Site
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
