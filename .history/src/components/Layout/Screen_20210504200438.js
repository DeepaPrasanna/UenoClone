import React from "react";
import { MdClear } from "react-icons/md";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Screen = () => {
  const onMouseEnter = (e) => {
    e.currentTarget.classList.remove("exit");
    e.currentTarget.classList.add("enter");
  };

  const onMouseLeave = (e) => {
    e.currentTarget.classList.remove("enter");
    e.currentTarget.classList.add("exit");
  };
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
                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Services<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Clients<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Careers<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  About<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  News<span className="screen-link-hover"></span>
                </Nav.Link>

                <Nav.Link href="#" className="screen-first-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Bueno<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Ueno.design<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Ueno.store<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Ueno.events<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Ueno.land<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Misc</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  NewsLetter<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Blog<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Playground<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  The Interview<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Press<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Privacy<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="">
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Social</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Twitter<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Instagram<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Dribble<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Github<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Linkedin<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Facebook<span className="screen-link-hover"></span>
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="screen-second-column-columns">
              <h2 className="screen-second-column-heading">Directions</h2>
              <Nav className="flex-column">
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  San Franscisco<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  New York<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  Los Angeles<span className="screen-link-hover"></span>
                </Nav.Link>
                <Nav.Link href="#" className="screen-second-column-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
