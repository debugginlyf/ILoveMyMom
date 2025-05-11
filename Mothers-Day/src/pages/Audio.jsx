import React from 'react';
import '../styles/Audio.css';
import { Container, Button } from 'react-bootstrap';

const Audio = () => {
  return (
    <Container className="audio-page py-5">
      <h2 className="text-center mb-4">Listen to My Heart ❤️</h2>
      <audio controls className="audio-player mb-4">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Button variant="danger" href="/gallery" className="custom-btn">
        Explore Our Gallery 📸
      </Button>
    </Container>
  );
};

export default Audio;
