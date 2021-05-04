import React from "react";

import { Container, Row, Col, Nav } from "react-bootstrap";

const Screen = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col sm={6} className="d-flex   ">
          <Nav className="flex-column">
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Clients</Nav.Link>
          </Nav>
          <Nav className="flex-column">
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col sm={6}>bye</Col>
      </Row>
    </Container>
  );
};

export default Screen;
