import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import '../styles/LoveButton.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [petals, setPetals] = useState([]);
  const fonts = ['font-greatvibes', 'font-pacifico', 'font-sacramento', 'font-dancing', 'font-indie'];
  const flowerEmojis = ['🌸', '🌺', '🌷', '🌼'];

  useEffect(() => {
    // Font cycling effect
    const fontInterval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 3000);

    // Create initial petals
    const initialPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 1 + Math.random() * 1.5
    }));
    setPetals(initialPetals);

    return () => {
      clearInterval(fontInterval);
    };
  }, []);

  const revealMessage = () => {
    setShowMessage(true);
  };

  const currentFont = fonts[fontIndex];

  return (
    <div className="home-page">
      <div className="background">
        <div className="petals-container">
          {petals.map((petal) => (
            <div 
              key={petal.id}
              className="petal"
              style={{
                left: `${petal.left}%`,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
                fontSize: `${petal.size}rem`
              }}
            >
              {petal.emoji}
            </div>
          ))}
        </div>
        <div className="content">
          <Container>
            <h1 className={`title display-4 ${currentFont} neon-hover`}>Happy Mother's Day 💖</h1>
            <p className={`subtitle lead ${currentFont} neon-hover`}>

<b>
<strong>
"तुम हर तूफ़ान के पीछे की शांत ताकत हो, 
हर अंधेरे कमरे में एक नर्म रौशनी की तरह — 
तुम्हारा बच्चा होना ही ज़िंदगी का सबसे बड़ा तोहफ़ा है।"
              Love you more than words can say.</strong> </b>💐❤️
            </p>
            <div className="love">
              <button 
                onClick={revealMessage} 
                className="btn buttons neon-hover" 
                id="button"
              >
                Celebrate You ❤️
              </button>
              <div id="heart1" className="hearts"></div>
              <div id="heart2" className="hearts"></div>
              <div id="heart3" className="hearts"></div>
              <div id="heart4" className="hearts"></div>
              <div id="heart5" className="hearts"></div>
            </div>
            {showMessage && (
              <div className="message-box">
                <p>Thank you for your unconditional love, support and warmth. You are truly one of a kind.</p>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;