import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <footer>
      <Box
        bgcolor="text.secondary"
        sx={{ bottom: 0, position: "absolute", width: "100%", py: 1 }}
      >
        <Container>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid item>
              <a
                href="https://github.com/MattPereira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" sx={{ color: "white" }} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/matt-pereira-32428a63/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              </a>
            </Grid>
            <Grid item>
              <Link to="/contact">
                <MailOutlineIcon fontSize="large" sx={{ color: "white" }} />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
