import { Grid } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButton from "../StyledButton";

const Socials = () => {
  return (
    <Grid container sx={{ py: 3 }} spacing={1} justifyContent="center">
      <Grid item>
        <StyledButton
          href="https://github.com/MattPereira"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" /> &nbsp; GitHub
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          href="https://www.linkedin.com/in/-matt-pereira-/"
          target="_blank"
          rel="noreferrer"
        >
          Linked&nbsp;
          <LinkedInIcon fontSize="large" />
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default Socials;
