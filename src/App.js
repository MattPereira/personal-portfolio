import { useCallback, useMemo, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import ColorModeContext from "./ColorModeContext";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const [mode, setMode] = useState("light");
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
        palette: {
          mode,
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          className="App page-container"
          // sx={{
          //   backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
          // }}
        >
          <Navigation />
          <Particles options={particlesOptions} init={particlesInit} />

          <Container className="content-wrap">
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<ProjectDetails />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ScrollToTop>
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
