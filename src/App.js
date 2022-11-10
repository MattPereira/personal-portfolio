import { useCallback, useMemo, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.scss";

import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import ProjectList from "./pages/Projects/ProjectList";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import ColorModeContext from "./ColorModeContext";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesDark from "./particlesDark.json";
import particlesLight from "./particlesLight.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme({
        typography: {
          h2: {
            fontFamily: "Fredoka One",
            fontSize: "4rem",
            fontWeight: 500,
            paddingBottom: "3rem",
            textAlign: "center",
          },
          h3: {
            fontFamily: "Carter One",
            fontWeight: 400,
          },
          p: {
            fontSize: "1.1rem",
            fontFamily: "Roboto",
            fontWeight: 400,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontFamily: "Montserrat",
                fontWeight: 600,
                color: mode === "light" ? "rgb(50,50,50)" : "#fff",
              },
            },
          },
        },
        palette: {
          text: {
            primary: mode === "light" ? "rgb(50,50,50)" : "#fff",
            secondary: mode === "light" ? "#fff" : "rgb(50,50,50)",
            highlight: "rgb(234, 82, 111)",
          },
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#fff",
                  paper: "#323232",
                },
              }
            : {
                background: {
                  default: "#323232",
                  paper: "#fff",
                },
              }),
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  console.log(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : "#eeeeee",
          }}
        >
          <Navigation />
          <Particles
            options={
              theme.palette.mode === "dark" ? particlesDark : particlesLight
            }
            init={particlesInit}
          />

          <Box sx={{ pt: "76.609px", pb: "51px", position: "relative" }}>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/projects/:name" element={<ProjectDetails />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ScrollToTop>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
