import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarStyles.css';

const linkStyle = {
  fontFamily: 'Pacifico, cursive',
  fontSize: '1.4rem',
  letterSpacing: '1.2px',
  color: '#d63384',
  padding: '0.5rem 1rem',
  textDecoration: 'none'
};

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      className="shadow-sm sticky-top"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      ref={navbarRef}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-danger"
          style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.8rem' }}
        >
          💖 Pyaari Maa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              style={linkStyle} 
              className="neon-hover"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/memories" 
              style={linkStyle} 
              className="neon-hover"
              onClick={() => setExpanded(false)}
            >
              Memories
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/reasons" 
              style={linkStyle} 
              className="neon-hover"
              onClick={() => setExpanded(false)}
            >
              Reasons
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/letter" 
              style={linkStyle} 
              className="neon-hover"
              onClick={() => setExpanded(false)}
            >
              Letter
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;