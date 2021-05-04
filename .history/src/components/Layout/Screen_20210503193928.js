import React from "react";

import { Container, Row, Col, Nav } from "react-bootstrap";

const Screen = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col sm={6}>
          <Nav className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav>
        </Col>
        <Col sm={6}>bye</Col>
      </Row>
    </Container>
  );
};

export default Screen;
