import React from 'react';
import '../styles/Gallery.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container className="gallery-page py-5">
      <h2 className="text-center mb-4">Our Family Moments 💖</h2>
      <Row>
        <Col md={4} sm={6}>
          <Image src="https://via.placeholder.com/300" fluid rounded className="gallery-image mb-4" />
        </Col>
        <Col md={4} sm={6}>
          <Image src="https://via.placeholder.com/300" fluid rounded className="gallery-image mb-4" />
        </Col>
        <Col md={4} sm={6}>
          <Image src="https://via.placeholder.com/300" fluid rounded className="gallery-image mb-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
