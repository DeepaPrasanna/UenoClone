import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="md">
        <Navbar.Brand href="#home">Ueno.</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto d-none d-sm-none d-md-flex m-2 p-3">
            <Nav.Link href="#home" className="px-3">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="px-3">
              Clients
            </Nav.Link>
            <Nav.Link href="#link" className="px-3">
              Careers
            </Nav.Link>
            <Nav.Link href="#link" className="px-3">
              About
            </Nav.Link>
            <Button type="button" className=" px-3 contact-button rounded-pill">
              Contact
            </Button>
          </Nav>
          <i class="fas fa-bars"></i>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
