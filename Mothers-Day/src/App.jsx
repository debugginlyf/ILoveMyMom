import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Reasons from './pages/Reasons';
import Letter from './pages/Letter';
import Audio from './pages/Audio';
import Gallery from './pages/Gallery';

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/reasons" element={<Reasons />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
);

export default App;
