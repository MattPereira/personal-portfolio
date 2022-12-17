import React from "react";
import {
  Box,
  Container,
  Grid,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <footer>
      <Box
        bgcolor="text.primary"
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
                <GitHubIcon fontSize="large" sx={{ color: "text.secondary" }} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/matt-pereira-32428a63/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  fontSize="large"
                  sx={{ color: "text.secondary" }}
                />
              </a>
            </Grid>
            <Grid item>
              <MailIcon
                onClick={handleClick}
                fontSize="large"
                sx={{ color: "text.secondary", cursor: "pointer" }}
              />

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography sx={{ p: 2, color: "text.secondary" }}>
                  matthewdavidpereira@gmail.com
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
