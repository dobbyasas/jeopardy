import React, { useState } from 'react';
import Question from './Question';
import './styles/Playground.scss';

const initialGameData = [
  {
    category: "Hudba",
    questions: [
      { value: "200", question: "Jak se jmenuje podžánr metalu do kterého se řadí kapely jako Linkin Park, Limp Bizkit, Korn nebo System Of A Down", answer: "Nu-metal" },
      { value: "400", question: "Jak se jmenoval Linkin Park před tím než se k nim připojil Chester Bennington?", answer: "Xero" },
      { value: "600", question: "Nejslavnější negr hrající na kytaru", answer: "Jimmy motherfucking Hendrix" },
      { value: "800", question: "Jak se přezdívá zpěvákovi kapely Ghost?", answer: "Papa Emeritus" },
      { value: "1000", question: "Ke které skupině se řadí fanouškovská skupina ARMY (Adorable Representative M.C. for Youth)", answer: "BTS" },
      { value: "100 for each", question: "Ve kterých skupinách hraje / hrál Corey Taylor (4)", answer: "Slipknot, Stone Sour, Corey Taylor, Kings of Chaos" },
    ],
  },
  {
    category: "Literatura",
    questions: [
      { value: "200", question: "Kdo napsal Válku s mloky?", answer: "Karel Čapek" },
      { value: "400", question: "Kterou legendární knižní fantasy ságu napsal J.R.R.Tolkien?", answer: "Příběhy Středozemě (Hobit, Pán Prstenů, Silmarilion...)" },
      { value: "600", question: "Ke které skupině řadíme Viktora Dyka", answer: "Buřiči" },
      { value: "800", question: "Kdo napsal Babičku", answer: "Boženka Němcová" },
      { value: "1000", question: "Va jaké dílo dostal John Steinbeck Nobelovu cenu", answer: "Hrozny hněvu" },
      { value: "100 for each", question: "Nejznámější díla Franze Kafky (6)", answer: "Proměna, Nezvěstný, Proces, povídky Venkovský lékař, Umělec v hladovění, dopisy Mileně a Ottle a rodině" },
    ],
  },
  {
    category: "Videohry",
    questions: [
      { value: "200", question: "Nejstreamovanější FPS střílečka na platformě Twitch", answer: "Valorant" },
      { value: "400", question: "Jak se jmenuje minihra v Minecraftu ze které později vznikl celý žánr videoher?", answer: "Hunger games / Survival games" },
      { value: "600", question: "Která konzole drží rekord za nejprodávanější konzoli v historii", answer: "Playstation 2" },
      { value: "800", question: "Jaký příkaz napíšeme ve hře Sims 4 aby jsme dostali peníze?", answer: "testingCheats true -> Money [počet peněz]" },
      { value: "1000", question: "Z čeho vznikla hra League of Legends", answer: "mód Dota pro hru Warcraft III" },
      { value: "100 for each", question: "Nejznámnější MMORPG hry? (6)", answer: "WoW, EVE Online, Metin 2, Guild Wars 2, Destiny 2, Warframe" },
    ],
  },
  {
    category: "Kinematografie",
    questions: [
      { value: "200", question: "Nejvýdělečnější film všech dob", answer: "Avatar (2 922 917 914 $)" },
      { value: "400", question: "Nejvíce nelegálně stahovaný film?", answer: "Interstellar (46 milionů)" },
      { value: "600", question: "Která pornoherečka je momentálně nejvýše na pornhub žebříčku?", answer: "Sweetie Fox (Lana Rhodes)" },
      { value: "800", question: "Který český film šel po roce vydání do kin i v zahraničí s dabingem, protože byl prostě až tak moc dobrej?", answer: "Pelíšky" },
      { value: "1000", question: "Ve kterém oscarem oceněném filmu můžeme vidět reálný sex herců?", answer: "Caligula" },
      { value: "100 for each", question: "Filmy Johnnyho Deppa (unlimited)", answer: "i mean...there's a lot lol" },
    ],
  },
  {
    category: "Českej bizár",
    questions: [
      { value: "200", question: "Na kterou písničku udělal Lucie Bíla tak špatnej cover že to kritizovali i na MTV v americe?", answer: "Smells Like Teen Spirit od Nirvany" },
      { value: "400", question: "Která bizardní skladba je velice známá i v zahraničí?", answer: "Pokemon GO song" },
      { value: "600", question: "Jak se jmenovala panenka které upadla hlava", answer: "Markétka" },
      { value: "800", question: "Který prezident počořil pero", answer: "Klaus" },
      { value: "1000", question: "Kde se našla Zdena", answer: "pod kořenem" },
    ],
  },
  {
    category: "Bizardní rekordy (tipovačka)",
    questions: [
      { value: "200", question: "Nejdelší hovno na světě?", answer: "792cm" },
      { value: "400", question: "Nejdále vystříknuté mléko z oka?", answer: "274cm" },
      { value: "600", question: "Kolik kg váží největší boobies ever?", answer: "17kg" },
      { value: "800", question: "Nejvíce rozbitých záchodových prkýnek hlavou za minutu?", answer: "46" },
      { value: "1000", question: "Největším počet piercingů na těle", answer: "1846" },
    ],
  },
  {
    category: "Jak moc znáte Kryštofa?",
    questions: [
      { value: "200", question: "Kolik chci dětí?", answer: "1" },
      { value: "400", question: "Kolikrát jsem se ve škole opil a někdo jiný o tom věděl", answer: "3" },
      { value: "600", question: "Nejoblíbenější skladba od Marilyna Mansona?", answer: "We are chaos" },
      { value: "800", question: "Na kolik nástrojů umím oficiálně hrát?", answer: "3 (kytara, basa, ukulele)" },
      { value: "1000", question: "Se kterou momentálně hrající kapelou bych si nejraději zahrál naživo?", answer: "Architects" },
      { value: "100 for each", question: "Kde všude jsem officiálně pracoval? (8)", answer: "Hospoda Kařez, McDonalds, Tesco, Pinguhost, ForestBar, lektor Kytary, Rasputitsa, SpaceKnow" },
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