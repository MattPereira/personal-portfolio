import { Button, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Socials = () => {
  const theme = useTheme();

  const StyledButton = styled(Button)({
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    px: 3,
    py: 1,
    borderRadius: "10px",
    fontSize: "1.3rem",
    fontFamily: "Raleway",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.secondary,
      borderColor: theme.palette.text.primary,
    },
  });

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={1} justifyContent="center">
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
