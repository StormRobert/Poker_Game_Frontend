import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Add logic for starting the game
    // For simplicity, let's just log a message for now
    console.log('Game started!');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Welcome to the Poker Game</h1>
      </div>
      <div className="card-body">
        <p>About the poker game ... 🃏</p>
        <button onClick={handleStartGame}>Start Game</button>
      </div>
    </div>
  );
};

export default Landing;