import React from 'react';
import '../styles/Letter.css';
import { Container, Button } from 'react-bootstrap';

const Letter = () => {
  return (
    <Container className="letter-page py-5">
      <h2 className="text-center mb-4">A Letter to the best Mom 💌</h2>
      <p className="letter-text mb-4">
        Dear Mom, <br />
        We can never thank you enough for everything you've done for me.
        You've shaped us into the person we are today, and we are forever grateful for your love, your strength, and your grace.
        Every day with you is a gift, and we cherish every single moment.
      </p>
    </Container>
  );
};

export default Letter;
