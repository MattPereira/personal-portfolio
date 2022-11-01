import { useState } from "react";
import "./Navigation.scss";

import ModeSwitch from "./ModeSwitch";

import logoWhite from "../../assets/images/mp/mp_logo_white.svg";
import logoBlack from "../../assets/images/mp/mp_logo_black.svg";

import { NavLink } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  ListItemIcon,
  Grid,
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Modes } from "tsparticles-engine";

const navItems = [
  {
    text: "Home",
    icon: <CottageOutlinedIcon sx={{ mb: "2px", mr: "5px" }} />,
    path: "/",
  },
  {
    text: "About",
    icon: <PersonOutlineOutlinedIcon sx={{ mb: "2px", mr: "5px" }} />,
    path: "/about",
  },
  {
    text: "Projects",
    icon: <WorkOutlineIcon sx={{ mb: "2px", mr: "5px" }} />,
    path: "/projects",
  },
  {
    text: "Resume",
    icon: <ArticleOutlinedIcon sx={{ mb: "2px", mr: "5px" }} />,
    path: "/resume",
  },
  {
    text: "Contact",
    icon: <MailOutlinedIcon sx={{ mb: "2px", mr: "5px" }} />,
    path: "/contact",
  },
];

const Navigation = (props, { toggleMode }) => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20 || window.innerWidth <= 992) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // window.addEventListener("scroll", scrollHandler);
  // window.addEventListener("resize", scrollHandler);

  const { window } = props;
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
          <Box component="img" src={logoBlack} sx={{ width: "35px" }} />
        </Grid>
        <Grid item>
          <CloseIcon fontSize="large" />
        </Grid>
      </Grid>
      <Divider />
      <List>
        {navItems.map((item) => {
          const { text, icon, path } = item;
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton component={NavLink} to={path}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton>
            <ModeSwitch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" color={false ? "transparent" : "transparent"}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <Box
                component="img"
                src={navColour ? logoBlack : logoWhite}
                sx={{ width: "35px" }}
              />
            </NavLink>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            justifyContent="center"
          >
            {navItems.map((item) => {
              const { text, icon, path } = item;
              return (
                <Button
                  key={text}
                  component={NavLink}
                  to={path}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontFamily: "Raleway",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    p: 2,
                  }}
                >
                  {icon} {text}
                </Button>
              );
            })}
          </Box>
          <ModeSwitch />
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

      {/* <Navbar
        collapseOnSelect
        expand="lg"
        className={navColour ? "sticky" : "navbar"}
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            eventkey={1}
            as={NavLink}
            to="/"
            className="navbar-brand"
          >
            {navColour ? (
              <img src={logoBlack} className="img-fluid logo" alt="brand" />
            ) : (
              <img src={logoWhite} className="img-fluid logo" alt="brand" />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link eventkey={2} as={NavLink} to="/">
                  <CottageOutlinedIcon sx={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={3} as={NavLink} to="/about">
                  <PersonOutlineOutlinedIcon sx={{ marginBottom: "2px" }} />{" "}
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={4} as={NavLink} to="/projects">
                  <WorkOutlineIcon sx={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={5} as={NavLink} to="/resume">
                  <ArticleOutlinedIcon sx={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={6} as={NavLink} to="/contact">
                  <MailOutlinedIcon sx={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Navigation;
