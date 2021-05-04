import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Ueno.</Navbar.Brand>
      <div className="d-flex ml-auto align-items-center">
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
        <GiHamburgerMenu />
      </div>
    </Navbar>
  );
};

export default Header;
