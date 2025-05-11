import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
    <Container>
      <Navbar.Brand as={Link} to="/" className="text-danger fw-bold">
        💖 Mom's Day
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/memories">Memories</Nav.Link>
          <Nav.Link as={Link} to="/reasons">Reasons</Nav.Link>
          <Nav.Link as={Link} to="/letter">Letter</Nav.Link>
          <Nav.Link as={Link} to="/audio">Audio</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
