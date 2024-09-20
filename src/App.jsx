import React, { useState, useEffect } from 'react';
import './App.scss';
import Playground from './Components/Playground';
import Header from './Components/Header';
import StartScreen from './Components/StartScreen';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleStartQuiz = () => {
    setShowCountdown(true);
  };

  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (countdown === 0) {
      setQuizStarted(true);
      setShowCountdown(false);
    }
  }, [showCountdown, countdown]);

  return (
    <div className="App">
      {!quizStarted && !showCountdown && <Header />}
      {!quizStarted && !showCountdown && <StartScreen onStart={handleStartQuiz} />}

      {showCountdown && (
        <div className="countdown">
          <h1 className="countdown-number">{countdown}</h1>
        </div>
      )}

      {quizStarted && <Playground />}
    </div>
  );
}

export default App;
