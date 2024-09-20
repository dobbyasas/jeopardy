import React, { useState } from 'react';
import './styles/Question.scss';

const Question = ({ question, value, answer, onBack, onShowAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
    onShowAnswer();
  };

  return (
    <div className="question-container">
      <h2>{value}</h2>
      <h1>{question}</h1>
      <br /><br /><br /><br /><br />
      {!showAnswer && (
        <button onClick={handleShowAnswer}>
          Show Answer
        </button>
      )}
      {showAnswer && <p>{answer}</p>}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Question;
