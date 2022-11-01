import { createContext, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
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

const ColorModeContext = createContext({ toggleColorMode: () => {} });

let theme = createTheme({});

theme = responsiveFontSizes(theme);

function App() {
  const colorMode = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App page-container">
        <Navigation />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
