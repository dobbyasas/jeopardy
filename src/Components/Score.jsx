import React from 'react';
import './styles/Score.scss';

const Score = ({ players, handleIncreaseScore, handleDecreaseScore }) => {
  return (
    <footer className="footer">
      {players.map((player, index) => (
        <div key={index} className="player">
          <img src={process.env.PUBLIC_URL + player.imgPath} alt={player.name} />
          <div className="info">
            <h3>{player.name}</h3>
            <div>Score: {player.score}</div>
            <div className="button-container">
              <button onClick={() => handleIncreaseScore(index)}>+</button>
              <button onClick={() => handleDecreaseScore(index)}>-</button>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Score;
