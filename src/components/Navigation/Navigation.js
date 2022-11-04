import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import ModeSwitch from "./ModeSwitch";
import { NavLink } from "react-router-dom";

import { ReactComponent as MPLogo } from "../../assets/images/mp/mp_logo_black.svg";

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
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  {
    text: "Home",
    icon: <CottageOutlinedIcon />,
    path: "/",
  },
  {
    text: "About",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/about",
  },
  {
    text: "Projects",
    icon: <WorkOutlineIcon />,
    path: "/projects",
  },
  {
    text: "Resume",
    icon: <ArticleOutlinedIcon />,
    path: "/resume",
  },
  {
    text: "Contact",
    icon: <MailOutlinedIcon />,
    path: "/contact",
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
      <List>
        {navItems.map((item) => {
          const { text, icon, path } = item;
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={path}
                sx={{ justifyContent: "center", fontSize: "1.3rem" }}
              >
                <ListItemIcon
                  sx={{ justifyContent: "center", color: "text.secondary" }}
                >
                  {icon}
                </ListItemIcon>
                <Typography sx={{ color: "text.secondary" }} fontSize="inherit">
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
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
          <NavLink to="/">
            <Box sx={{ width: "62px" }}>
              <SvgIcon
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? scrolled
                        ? "white"
                        : theme.palette.background.paper
                      : theme.palette.mode === "dark"
                      ? scrolled
                        ? theme.palette.background.default
                        : theme.palette.background.paper
                      : "white",
                }}
                fontSize="large"
              >
                <MPLogo />
              </SvgIcon>
            </Box>
          </NavLink>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
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
                    color: scrolled ? "text.secondary" : "text.primary",
                    textTransform: "none",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    p: 2,
                  }}
                >
                  {icon} <span style={{ marginLeft: "4px" }}>{text}</span>
                </Button>
              );
            })}
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
