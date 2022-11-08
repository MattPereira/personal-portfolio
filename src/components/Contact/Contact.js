import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import selfie from "../../assets/images/selfie.jpg";

import {
  Typography,
  Grid,
  Container,
  Box,
  Button,
  Alert,
  TextField,
} from "@mui/material";

const Contact = () => {
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
    <Container sx={{ py: 5 }}>
      <Typography variant="h2" color="text.primary">
        <span className="pink">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Contact".split("")}
            idx={10}
          />
        </span>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={" Me!".split("")}
          idx={17}
        />
      </Typography>

      <Grid container>
        <Grid item lg={5} xl={6}>
          <div className="d-flex justify-content-center text-center mb-5">
            <Box
              component="img"
              sx={{ width: "75%", borderRadius: "50%" }}
              src={selfie}
              alt="selfie"
            />
          </div>
        </Grid>
        <Grid item lg={7} xl={6}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="p" color="text.primary">
              I am interested in both freelance and employment opportunities.
              Prospective clients are welcome to message me using the form
              below!
            </Typography>
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
                variant="filled"
                type="text"
                name="name"
                required
                sx={{ width: "100%" }}
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
                variant="filled"
                type="email"
                name="email"
                required
                sx={{ width: "100%" }}
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
                variant="filled"
                name="message"
                required
                sx={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ textAlign: "end" }}>
              <Button type="submit" variant="contained">
                SEND
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
