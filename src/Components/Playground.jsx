import React, { useState } from 'react';
import Question from './Question';
import './styles/Playground.scss';

const initialGameData = [
  {
    category: "Kinematografie",
    questions: [
      { value: "200", question: "Kdo je režisérem filmu Titanic z roku 1997?", answer: "James Cameron" },
      { value: "400", question: "Který herec ztvárnil postavu Indiana Jonese?", answer: "Harrison Ford" },
      { value: "600", question: "Který film byl první hraný film s komplet digitálním zvukem?", answer: "Batman Returns" },
      { value: "800", question: "Jaký film získal nejvíce Oscarů v historii a kolik jich získal (bonus 200)?", answer: "Titanic a Pán prstenů: Návrat krále, každý 11 Oscarů" },
      { value: "1000", question: "Jaký film, byl jako první, natočený v IMAX formátu?", answer: "Dunkerk" },
      { value: "100 for each", question: "Za které filmy dostal Johnny Depp nominace na Oscara? (3)", answer: "Piráti z Karibiku: Prokletí Černé perly, Hledání Země Nezemě, Sweeney Todd: Ďábelský holič z Fleet Street" },
    ],
  },
  {
    category: "Literatura",
    questions: [
      { value: "200", question: "Kdo je autorem knihy Harry Potter a Kámen mudrců", answer: "J.K. Rowling" },
      { value: "400", question: "Jaké národnosti byl spisovatel Franz Kafka", answer: "Česká" },
      { value: "600", question: "Který román Ernesta Hemingwaye získal Pulitzerovu cenu v roce 1953?", answer: "Stařec a moře" },
      { value: "800", question: "Který literární styl je spojen s díly jako Na východ od ráje od Johna Steinbecka a V srdci temnoty od Josepha Conrada?", answer: "Realismus" },
      { value: "1000", question: "Jaký je název románu, ve kterém se objevuje postava jménem Atticus Finch?", answer: "Jak zabít ptáčka" },
      { value: "100 for each", question: "Ve kterých divadlech vystupoval voskovec a werich? (3)", answer: "Osvobozené divadlo, Divadlo na Vinohradech, Národní divadlo" },
    ],
  },
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
      { value: "100 for each", question: "", answer: "" },
    ],
  },
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
      { value: "100 for each", question: "", answer: "" },
    ],
  },
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
    ],
  },
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
    ],
  },
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
      { value: "100 for each", question: "", answer: "" },
    ],
  },
];


const Playground = () => {
  const [gameData, setGameData] = useState(initialGameData);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleBack = () => {
    setCurrentQuestion(null);
  };

  const markQuestionAsAnswered = (categoryIndex, questionIndex) => {
    const newData = [...gameData];
    newData[categoryIndex].questions[questionIndex].answered = true;
    setGameData(newData);
  };

  return (
    <div className="playground">
      {gameData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category">
          <h2>{category.category}</h2>
          {category.questions.map((question, questionIndex) => (
            <button
              key={questionIndex}
              className="question-button"
              onClick={() => setCurrentQuestion({ ...question, categoryIndex, questionIndex })}
              disabled={question.answered}
            >
              {question.value}
            </button>
          ))}
        </div>
      ))}
      {currentQuestion && (
        <Question
          question={currentQuestion.question}
          value={currentQuestion.value}
          answer={currentQuestion.answer}
          onBack={handleBack}
          onShowAnswer={() => markQuestionAsAnswered(currentQuestion.categoryIndex, currentQuestion.questionIndex)}
        />
      )}
    </div>
  );
};

export default Playground; 


/*
const initialGameData = [
  {
    category: "",
    questions: [
      { value: "200", question: "", answer: "" },
      { value: "400", question: "", answer: "" },
      { value: "600", question: "", answer: "" },
      { value: "800", question: "", answer: "" },
      { value: "1000", question: "", answer: "" },
      { value: "100 for each", question: "", answer: "" },
    ],
  }
];
*/