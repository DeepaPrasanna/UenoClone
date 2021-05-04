import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Ueno.</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="d-none d-sm-none d-md-block ">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#link">Clients</Nav.Link>
            <Nav.Link href="#link">Careers</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Button type="button" className=" contact-button rounded-pill">
              Contact
            </Button>
          </Nav>
          <Button>hello</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
