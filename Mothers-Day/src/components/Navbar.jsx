import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarStyles.css'; // Make sure this file exists in the same folder

const linkStyle = {
  fontFamily: 'Pacifico, cursive',
  fontSize: '1.4rem',
  letterSpacing: '1.2px',
  color: '#d63384',
  padding: '0.5rem 1rem',
  textDecoration: 'none'
};

const NavbarComponent = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
    <Container>
      <Navbar.Brand
        as={Link}
        to="/"
        className="text-danger fw-bold"
        style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.8rem' }}
      >
        💖 Humari Pyaari Mummy 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={linkStyle} className="neon-hover">Home</Nav.Link>
          <Nav.Link as={Link} to="/memories" style={linkStyle} className="neon-hover">Memories</Nav.Link>
          <Nav.Link as={Link} to="/reasons" style={linkStyle} className="neon-hover">Reasons</Nav.Link>
          <Nav.Link as={Link} to="/letter" style={linkStyle} className="neon-hover">Letter</Nav.Link>
          <Nav.Link as={Link} to="/audio" style={linkStyle} className="neon-hover">Audio</Nav.Link>
          <Nav.Link as={Link} to="/gallery" style={linkStyle} className="neon-hover">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
