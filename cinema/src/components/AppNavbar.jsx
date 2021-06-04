import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const AppNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Find Cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" style={{color: "rgb(89, 192, 223)"}}>Movies</Nav.Link>
            <Nav.Link href="#pricing" style={{color: "rgb(89, 192, 223)"}}>TV Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
