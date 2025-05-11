import React from 'react';
import '../styles/Letter.css';
import { Container, Button } from 'react-bootstrap';

const Letter = () => {
  return (
    <Container className="letter-page py-5">
      <h2 className="text-center mb-4">A Letter to My Dearest Mom 💌</h2>
      <p className="letter-text mb-4">
        Dear Mom, <br />
        I can never thank you enough for everything you've done for me.
        You've shaped me into the person I am today, and I am forever grateful for your love, your strength, and your grace.
        Every day with you is a gift, and I cherish every single moment.
      </p>
      <Button variant="danger" href="/audio" className="custom-btn">
        Hear My Voice ❤️
      </Button>
    </Container>
  );
};

export default Letter;
