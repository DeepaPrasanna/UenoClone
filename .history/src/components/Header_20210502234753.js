import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
