import React from 'react';
import '../styles/Reasons.css';
import { Container, ListGroup } from 'react-bootstrap';

const Reasons = () => {
  return (
    <Container className="reasons-page py-5">
      <h2 className="text-center mb-4">Why I Love You, Mom ❤️</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>I love your kindness and selflessness.</ListGroup.Item>
        <ListGroup.Item>You always put others before yourself.</ListGroup.Item>
        <ListGroup.Item>Your hugs make everything better.</ListGroup.Item>
        <ListGroup.Item>You inspire me to be better every day.</ListGroup.Item>
        <ListGroup.Item>Your laughter lights up any room.</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Reasons;
