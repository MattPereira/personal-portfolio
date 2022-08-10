import { useState } from "react";
import "./Navigation.scss";

import logoLight from "../../assets/svg/logos/MP_LOGO_LIGHT.svg";
import logoDark from "../../assets/svg/logos/MP_LOGO_DARK.svg";

import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { FiMail } from "react-icons/fi";

import { CgFileDocument } from "react-icons/cg";

const Navigation = () => {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            eventkey={1}
            as={RRNavLink}
            to="/"
            className="navbar-brand"
          >
            {navColour ? (
              <img src={logoDark} className="img-fluid logo" alt="brand" />
            ) : (
              <img src={logoLight} className="img-fluid logo" alt="brand" />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link eventkey={2} as={RRNavLink} to="/">
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={3} as={RRNavLink} to="/about">
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={4} as={RRNavLink} to="/projects">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={5} as={RRNavLink} to="/resume">
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventkey={6} as={RRNavLink} to="/contact">
                  <FiMail style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
