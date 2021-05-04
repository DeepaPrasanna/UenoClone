import React from "react";

import { Container, Row, Col, Nav } from "react-bootstrap";

const Screen = () => {
  return (
    <Container fluid className="p-5">
      <Row className=" vh-100">
        <Col sm={6} className="d-flex flex-sm-column flex-md-row screen-first-column">
          <Nav className="flex-column">
            <Nav.Link href="#" className="screen-links">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="screen-links">
              Clients
            </Nav.Link>
            <Nav.Link href="#" className="screen-links">
              Careers
            </Nav.Link>
          </Nav>
          <Nav className="flex-column">
            <Nav.Link href="#" className="screen-links">
              About
            </Nav.Link>
            <Nav.Link href="#" className="screen-links">
              News
            </Nav.Link>

            <Nav.Link href="#" className="screen-links">
              Contact
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={6}>
          <Row>
            <Col className="screens-second-column-columns">
              <h2>Experiments</h2>
              <Nav>
                <Nav.Link href="#" className="screen-links">
                  Bueno
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Ueno.design
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Ueno.store
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Ueno.events
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Ueno.land
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screens-second-column-columns">
              <h2>Misc</h2>
              <Nav>
                <Nav.Link href="#" className="screen-links">
                  NewsLetter
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Blog
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Playground
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  The Interview
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Press
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Privacy
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col className="screens-second-column-columns">
              <h2>Social</h2>
              <Nav>
                <Nav.Link href="#" className="screen-links">
                  Twitter
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Instagram
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Dribble
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Github
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Linkedin
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Facebook
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screens-second-column-columns">
              <h2>Directions</h2>
              <Nav>
                <Nav.Link href="#" className="screen-links">
                  San Franscisco
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  New York
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
                  Los Angeles
                </Nav.Link>
                <Nav.Link href="#" className="screen-links">
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
