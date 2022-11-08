import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const OutlinedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  px: 3,
  py: 1,
  borderRadius: "10px",
  fontSize: "1.25rem",
  fontFamily: "Montserrat",
  textTransform: "none",
  border: "2px solid",
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.secondary,
    border: "2px solid",
  },
}));

export default function StyledButton({ children }) {
  return <OutlinedButton variant="outlined">{children}</OutlinedButton>;
}
