import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function Navsbar() {
  //declear navigation for the useNavigation hook
  //used to change pages
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              //applied here
              navigate("about");
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navsbar;
