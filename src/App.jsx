import React, { useState } from 'react';
import './App.scss';
import Playground from './Components/Playground';
import Score from './Components/Score';

function App() {
  const [players, setPlayers] = useState([
    { name: "Daník", imgPath: "/profiles/dan.jpeg", score: 0 },
    { name: "Hrobař", imgPath: "/profiles/tereza.jpeg", score: 0 },
    { name: "Terezka", imgPath: "/profiles/terka.jpeg", score: 0 },
  ]);

  const handleIncreaseScore = (index) => {
    const newPlayers = [...players];
    newPlayers[index].score += 100;
    setPlayers(newPlayers);
  };

  const handleDecreaseScore = (index) => {
    const newPlayers = [...players];
    newPlayers[index].score -= 100;
    setPlayers(newPlayers);
  };


  return (
    <div className="App">
      <Playground />
      <Score
        players={players}
        handleIncreaseScore={handleIncreaseScore}
        handleDecreaseScore={handleDecreaseScore}
      />
    </div>
  );
}

export default App;
