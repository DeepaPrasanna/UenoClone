import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Ueno.</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Services</Nav.Link>
          <Nav.Link href="#link">Clients</Nav.Link>
          <Nav.Link href="#link">Careers</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Button type="button" className=" contact-button rounded-pill">
            Contact
          </Button>
        </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav "></Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
