import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { useTheme } from "@mui/material/styles";

import WorkIcon from "@mui/icons-material/Work";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Toolbar,
  Button,
  ListItemIcon,
  Grid,
  SvgIcon,
  Link,
} from "@mui/material";

import { ReactComponent as MPLogo } from "../../assets/svg/logos/mp_letters.svg";
import ModeSwitch from "./ModeSwitch";

const navItems = [
  {
    text: "About",
    icon: <PersonIcon />,
    path: "#about",
  },
  {
    text: "Skills",
    icon: <StarIcon />,
    path: "#skills",
  },
  {
    text: "Projects",
    icon: <LightbulbIcon />,
    path: "#projects",
  },
  {
    text: "Experience",
    icon: <WorkIcon />,
    path: "#experience",
  },
  {
    text: "Contact",
    icon: <MailIcon />,
    path: "#contact",
  },
];

const Navigation = (props) => {
  const theme = useTheme();
  const [scrolled, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20 || window.innerWidth <= 992) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("resize", scrollHandler);

  const { window: windoo } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 1.5, px: 3 }}
      >
        <Grid item>
          <SvgIcon
            fontSize="large"
            sx={{ color: theme.palette.background.default }}
          >
            <MPLogo />
          </SvgIcon>
        </Grid>
        <Grid item>
          <CloseIcon fontSize="large" sx={{ color: "text.secondary" }} />
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          {navItems.map((item) => {
            const { text, icon, path } = item;
            return (
              <ListItem key={text} disablePadding>
                <HashLink smooth to={path} style={{ textDecoration: "none" }}>
                  <ListItemButton
                    sx={{ justifyContent: "center", fontSize: "1.3rem" }}
                  >
                    <ListItemIcon
                      sx={{ justifyContent: "center", color: "text.primary" }}
                    >
                      {icon}
                    </ListItemIcon>
                    <Typography
                      sx={{ color: "text.primary" }}
                      fontSize="inherit"
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </HashLink>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              sx={{ fontSize: "1.3rem" }}
              href="https://docs.google.com/document/d/1H-5nsbQjDQPvQYtGq6Y91_NAwTxjicJEVXbtxtorsKI/edit?usp=sharing"
              target="_blank"
            >
              <ListItemIcon
                sx={{ justifyContent: "center", color: "text.primary" }}
              >
                <ArticleIcon />
              </ListItemIcon>
              <Typography sx={{ color: "text.primary" }} fontSize="inherit">
                Resume
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  const container =
    windoo !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrolled
            ? theme.palette.background.paper
            : "transparent",
        }}
        elevation={scrolled ? 8 : 0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <HashLink smooth to="/#landing">
            <Box sx={{ width: "62px" }}>
              <SvgIcon
                sx={{
                  color: "text.primary",
                }}
                fontSize="large"
              >
                <MPLogo />
              </SvgIcon>
            </Box>
          </HashLink>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >
            {navItems.map((item) => {
              const { text, icon, path } = item;
              return (
                <HashLink
                  smooth
                  to={path}
                  key={text}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color: "text.primary",
                      textTransform: "none",
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                      p: 2,
                      "&:hover": {
                        color: "rgb(234, 83, 111)",
                      },
                    }}
                  >
                    {icon} <span style={{ marginLeft: "4px" }}>{text}</span>
                  </Button>
                </HashLink>
              );
            })}
            <Button
              component={Link}
              href="https://docs.google.com/document/d/1H-5nsbQjDQPvQYtGq6Y91_NAwTxjicJEVXbtxtorsKI/edit?usp=sharing"
              target="_blank"
              sx={{
                color: "text.primary",
                textTransform: "none",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "1.1rem",
                p: 2,
                "&:hover": {
                  color: "rgb(234, 83, 111)",
                },
              }}
            >
              <ArticleIcon /> <span style={{ marginLeft: "4px" }}>Resume</span>
            </Button>
          </Box>
          <ModeSwitch />

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" sx={{ color: "text.secondary" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navigation;
