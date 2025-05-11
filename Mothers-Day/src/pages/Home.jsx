import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import '../styles/LoveButton.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const fonts = ['font-greatvibes', 'font-pacifico', 'font-sacramento', 'font-dancing', 'font-indie'];

  useEffect(() => {
    // Font cycling effect
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const revealMessage = () => {
    setShowMessage(true);
  };

  const currentFont = fonts[fontIndex];

  return (
    <div className="home-page">
      <div className="background">
        <div className="petals"></div>
        <div className="content">
          <Container>
            <h1 className={`title display-4 ${currentFont} neon-hover`}>Happy Mother's Day 💖</h1>
            <p className={`subtitle lead ${currentFont} neon-hover`}>
              To the woman who gave me everything — this is for you, Mom.
            </p>
            <div className="love">
              <button 
                onClick={revealMessage} 
                className="btn buttons neon-hover" 
                id="button"
              >
                Celebrate Mom ❤️
              </button>
              <div id="heart1" className="hearts"></div>
              <div id="heart2" className="hearts"></div>
              <div id="heart3" className="hearts"></div>
              <div id="heart4" className="hearts"></div>
              <div id="heart5" className="hearts"></div>
            </div>
            {showMessage && (
              <div className="message-box">
                <p>Thank you for your unconditional love, support, and warmth. You are truly one of a kind.</p>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
