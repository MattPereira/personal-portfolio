import { useState } from "react";
import "./Navigation.scss";

import logoWhite from "../../assets/images/mp/mp_logo_white.svg";
import logoBlack from "../../assets/images/mp/mp_logo_black.svg";

import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Navigation = () => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20 || window.innerWidth <= 992) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("resize", scrollHandler);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand eventkey={1} as={NavLink} to="/" className="navbar-brand">
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
                <PersonOutlineOutlinedIcon sx={{ marginBottom: "2px" }} /> About
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
    </Navbar>
  );
};

export default Navigation;
