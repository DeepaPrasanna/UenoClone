import React from "react";
import { MdClear } from "react-icons/md";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Screen = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="d-flex brand align-items-center">
          <Navbar>
            <Navbar.Brand href="#home">ueno.</Navbar.Brand>
          </Navbar>
          <div className="ml-auto">
            <MdClear />
          </div>
        </Col>
      </Row>
      <Row className=" screen w-100">
        <Col md={6} className=" screen-first-column">
          <Row>
            <Col>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-first-column-links">
                  Services<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  Clients<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  Careers<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-first-column-links">
                  About<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links">
                  News<span className="screen-link-hover"></span>
                </Nav.Link>

                <Nav.Link href="#" className="screen-first-column-links">
                  Contact<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="screen-second-column">
          <Row className="">
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Experiments</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  Bueno<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.design<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.store<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.events<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Ueno.land<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Misc</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  NewsLetter<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Blog<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Playground<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  The Interview<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Press<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Privacy<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="">
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Social</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  Twitter<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Instagram<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Dribble<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Github<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Linkedin<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Facebook<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Directions</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links">
                  San Franscisco<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  New York<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Los Angeles<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links">
                  Reykjavík<span className="screen-link-hover"></span>
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
