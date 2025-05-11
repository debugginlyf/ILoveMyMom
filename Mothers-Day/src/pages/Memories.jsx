import React from 'react';
import '../styles/Memories.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const memoryData = [
  {
    image: "https://via.placeholder.com/300",
    text: "A beautiful day we spent together at the park."
  },
  {
    image: "https://via.placeholder.com/300",
    text: "The sweetest birthday celebration we've had."
  },
  {
    image: "https://via.placeholder.com/300",
    text: "A memorable trip we took last summer."
  },
  {
    image: "https://via.placeholder.com/300",
    text: "A mmorable trip we took last summer."
  },
  {
    image: "https://via.placeholder.com/300",
    text: "A memorabltrip we took last summer."
  }
];

const MemoryCard = ({ image, text }) => {
  return (
    <StyledWrapper>
      <div className="stack">
        <div className="card">
          <div className="image">
            <img src={image} alt="Memory" />
          </div>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .stack {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    transition: 0.25s ease;
    &:hover {
      transform: rotate(5deg);
      .card:before {
        transform: translatey(-2%) rotate(-4deg);
      }
      .card:after {
        transform: translatey(2%) rotate(4deg);
      }
    }
  }

  .card {
    aspect-ratio: 3 / 2;
    border: 4px solid;
    border-color: #ffc3cc;
    background-color: #fff;
    position: relative;
    transition: 0.15s ease;
    cursor: pointer;
    padding: 5% 5% 15% 5%;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      border: 4px solid;
      border-color: #ffc3cc;
      background-color: #fff;
      transform-origin: center center;
      z-index: -1;
      transition: 0.15s ease;
      top: 0;
      left: 0;
    }

    &:before {
      transform: translatey(-2%) rotate(-6deg);
    }

    &:after {
      transform: translatey(2%) rotate(6deg);
    }
  }
  
  .image {
    width: 100%;
    border: 4px solid;
    border-color: #ffc3cc;
    background-color: #eee;
    aspect-ratio: 1 / 1;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .card-text {
    margin-top: 10px;
    font-family: cursive;
    color: #F05757;
    text-align: center;
  }

  .browser-warning {
    margin-bottom: 4rem;
  }

  @supports (aspect-ratio: 1 / 1) {
    .browser-warning {
      display: none;
    }
  }
`;

const Memories = () => {
  return (
    <Container className="memories-page py-5">
      <h2 className="text-center mb-4">Our Beautiful Memories 📸</h2>
      <Row>
        {memoryData.map((memory, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <MemoryCard image={memory.image} text={memory.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Memories;