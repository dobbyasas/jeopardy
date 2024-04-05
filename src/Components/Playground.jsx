import React, { useState } from 'react';
import Question from './Question';
import './styles/Playground.scss';

const initialGameData = [
  {
    category: "Hudba",
    questions: [
      { value: "200", question: "Nejslavnější dílo Mozarta?", answer: "Figarova svatba / Don Giovanni" },
      { value: "400", question: "První kapela na světě která je považovaná za metal?", answer: "Black Sabbath" },
      { value: "600", question: "Do jakého podžánru metalu řadíme skupiny jako Currents, Parkway Drive, Thrown nebo Spiritbox?", answer: "Metalcore" },
      { value: "800", question: "Fanouškovská základna které skupiny se nazívá ARMY (Adorable Representative MC for Youth)", answer: "BTS" },
      { value: "1000", question: "V jakém roce vyšla skladba Non Stop od Michala Davida? ( tolerance 5 let )", answer: "1986" },
    ],
  },
  {
    category: "Literatura",
    questions: [
      { value: "200", question: "Kdy se odehrává 'Na západní frontě klid'?", answer: "Během první světové války" },
      { value: "400", question: "Nejslavnější dílo autora Antoine de Saint-Exupéryho?", answer: "Malý princ" },
      { value: "600", question: "Kdo napsal O myších a lidech?", answer: "John Steinbeck" },
      { value: "800", question: "Do jaké skupiny řadíme Viktora Dyka?", answer: "Buřiči" },
      { value: "1000", question: "Hlavní postava knihy Pes baskervillský", answer: "Sherlock Holmes" },
    ],
  },
  {
    category: "Videohry",
    questions: [
      { value: "200", question: "Která hra je historicky neprodávanější hrou na světě?", answer: "Tetris ( +-170 milionů kopií )" },
      { value: "400", question: "Která hra získala nejvíce ocenění?", answer: "Witcher 3" },
      { value: "600", question: "Kolik uživatelů platfomy Steam je v Severní Koreji", answer: "1" },
      { value: "800", question: "Momentálně nejstreamovanější FPS hra na platfomě Twitch", answer: "Valorant" },
      { value: "1000", question: "Z čeho vznikla hra League of Legends", answer: "Mód Dota pro hru Warcraft III" },
    ],
  },
  {
    category: "Kinematografie",
    questions: [
      { value: "200", question: "Nejvýdělečnější film v histrii kinematografie?", answer: "Avatar (2 923 706 026 $)" },
      { value: "400", question: "Které 3 filmy mají nejvíce oskarů? (každá správná odpověď je za 400 bodů)", answer: "Ben-Hur, Titanic a Pán prstenů: Návrat krále" },
      { value: "600", question: "Který film vydělal více Barbie nebo Oppenheimer", answer: "Barbie (1 445 633 117 $)" },
      { value: "800", question: "Který film v historii byl nejdražší na výrobu?", answer: "Titanic ( cca 200 milionů dolarů)" },
      { value: "1000", question: "Který režisér je známý hlavně tím že nerad použív počítače a rád všechno děla praktickými efekty?", answer: "Christopher Nolan" },
    ],
  },
  {
    category: "Českej bizár",
    questions: [
      { value: "200", question: "Který bezdomovec měl svatbu?", answer: "Jiří Kára" },
      { value: "400", question: "Nejslavnější politik v zahraničí?", answer: "Andrej Babiš" },
      { value: "600", question: "Kde se našla Zuzka?", answer: "pod kořenem" },
      { value: "800", question: "Na kterou 'celebritu' udělal Sibiřan nejvíce reakcí?", answer: "Shopaholic Adel" },
      { value: "1000", question: "Která bizarní písnička byla známá i ve světě?", answer: "Pokemon GO song by Misha ( 98 milionů shlédnutí na youtube )" },
    ],
  },
  {
    category: "Legendární hlášky",
    questions: [
      { value: "200", question: "Co řekl Petr Nárožný v pohádce čerty nejsou žerty a po letech i v reklamě na film Rebel Moon?", answer: "JE TO REBEL!!!" },
      { value: "400", question: "Nejlegendárnější hláška Arnolda Schwanceneggra?", answer: "I'LL BE BACK (The Terminator)/ COCAINUM (Red Heat)" },
      { value: "600", question: "Nejčastější hláška Petera Griffina?", answer: "Sklapni Meg! / Shut up Meg!" },
      { value: "800", question: "Nejznámější hádka o rybě.", answer: "JE ČERSTVÁ!! NENÍ ČERSTVÁ!..." },
      { value: "1000", question: "Kdo řekl 'Ano, měli jsme jednu snídani ale co druhá snídaně?' a kde?", answer: "Pipin - Pán prstenů: Dvě věže" },
    ],
  },
  {
    category: "Jak moc znáte Kryštofa?",
    questions: [
      { value: "200", question: "Můj drink of choice?", answer: "Sex on the Beach" },
      { value: "400", question: "Kolikrát mě sebrala policie?", answer: "1" },
      { value: "600", question: "Moje nejoblíbenější skladba od Sleep Token", answer: "Jaws / Granite" },
      { value: "800", question: "Moje přezdívka než jsem si začal říkat Tofi?", answer: "Dobby" },
      { value: "1000", question: "Nejvyšší převýšení které jsem kdy vylezl? ( tolerance 300 metrů)", answer: "+- 4100 metrů" },
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