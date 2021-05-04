import React from "react";

import { Container, Row, Col, Nav } from "react-bootstrap";

const Screen = () => {
  return (
    <Container fluid className="p-5">
      <Row className=" vh-100">
        <Col md={6} className=" screen-first-column">
          <Row>
            <Col>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-first-column-links">
                  Services<span className=""></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  Clients
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  Careers
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-first-column-links">
                  About
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  News
                </Nav.Link>

                <Nav.Link href="#" className="screen-first-column-links">
                  Contact
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="screen-second-column">
          <Row className="d-flex flex-row">
            <Col className="screen-second-column-columns">
              <h2>Experiments</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  Bueno
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.design
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.store
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.events
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.land
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2>Misc</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  NewsLetter
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Blog
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Playground
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  The Interview
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Press
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Privacy
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="d-flex flex-row">
            <Col className="screen-second-column-columns">
              <h2>Social</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  Twitter
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Instagram
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Dribble
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Github
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Linkedin
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Facebook
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2>Directions</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  San Franscisco
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  New York
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Los Angeles
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Reykjavík
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Screen;
