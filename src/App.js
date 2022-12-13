import { useCallback, useMemo, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { Box } from "@mui/material";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import ColorModeContext from "./utils/ColorModeContext";
import particlesDark from "./utils/particles/darkMode.json";
import particlesLight from "./utils/particles/lightMode.json";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";

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
            fontFamily: "Poppins",
            fontWeight: 500,
          },
          p: {
            fontSize: "1.1rem",
            fontFamily: "Poppins",
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
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
