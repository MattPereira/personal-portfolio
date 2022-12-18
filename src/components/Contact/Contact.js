import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../../utils/AnimatedLetters";
import { ReactComponent as MPLogo } from "../../assets/svg/logos/mp_circle.svg";

import {
  Typography,
  Grid,
  Container,
  Box,
  Alert,
  TextField,
  Button,
  SvgIcon,
  Paper,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();

  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  const [status, setStatus] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtgulno",
        "template_kc3t8nf",
        form.current,
        "BLYUfnfW6-k4FzoTv"
      )
      .then(
        () => {
          setStatus(true);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );
  };

  return (
    <Container sx={{ pt: 5, pb: 10 }} id="contact">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" color="text.primary">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Contact".split("")}
            idx={10}
          />
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
          <Box
            sx={{
              fontSize: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
              display: "flex",
              justifyContent: "center",
              mb: 5,
            }}
          >
            <SvgIcon fontSize="inherit" sx={{ color: "text.primary" }}>
              <MPLogo />
            </SvgIcon>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          order={{ xs: 1, lg: 2 }}
          sx={{ mb: { xs: 5, md: 0 } }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: "30px",
              bgcolor: theme.palette.background.paper,
              p: 3,
            }}
          >
            <Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" align="center">
                  Send A Message
                </Typography>
              </Box>
              {status === true ? (
                <Alert severity="success">
                  Message successfully sent! I will respond as soon as possible!
                </Alert>
              ) : status === false ? (
                <Alert severity="error">
                  Failed to send the message, but you can email me directly at{" "}
                  <a href="mailto:matthewdavidpereira@gmail.org">
                    matthewdavidpereira@gmail.org
                  </a>
                </Alert>
              ) : null}
            </Box>

            <Box component="form" onSubmit={sendEmail}>
              <Box
                sx={{
                  opacity: 0,
                  animation: "fadeInUp 1s 1s",
                  animationFillMode: "forwards",
                  mb: 2,
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  required
                  sx={{
                    width: "100%",
                    ".MuiFormLabel-root": { color: "text.primary" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  opacity: 0,
                  animation: "fadeInUp 2s 2s",
                  animationFillMode: "forwards",
                  mb: 2,
                }}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  required
                  sx={{
                    width: "100%",
                    ".MuiFormLabel-root": { color: "text.primary" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  opacity: 0,
                  animation: "fadeInUp 3s 3s",
                  animationFillMode: "forwards",
                  mb: 2,
                }}
              >
                <TextField
                  label="Message"
                  multiline
                  minRows={5}
                  variant="outlined"
                  name="message"
                  required
                  sx={{
                    width: "100%",
                    ".MuiFormLabel-root": { color: "text.primary" },
                  }}
                />
              </Box>
              <Box sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#EA526F",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    width: "100%",
                  }}
                  type="submit"
                >
                  submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
