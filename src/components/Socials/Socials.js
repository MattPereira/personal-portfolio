import { Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Socials = () => {
  const StyledButton = styled(Button)({
    color: "white",
    borderColor: "white",
    px: 3,
    py: 1,
    borderRadius: "10px",
    fontSize: "1.3rem",
    fontFamily: "Raleway",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "#1e1e1e",
      borderColor: "white",
    },
  });

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={1}>
        <Grid item>
          <StyledButton
            variant="outlined"
            href="https://github.com/MattPereira"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" /> &nbsp; GitHub
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton
            variant="outlined"
            href="https://www.linkedin.com/in/-matt-pereira-/"
            target="_blank"
            rel="noreferrer"
          >
            Linked&nbsp;
            <LinkedInIcon fontSize="large" />
          </StyledButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Socials;
