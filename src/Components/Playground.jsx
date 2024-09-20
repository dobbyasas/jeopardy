import React, { useState, useEffect } from 'react';
import supabase from '../configSupabase';
import Question from './Question';
import './styles/Playground.scss';

const Playground = () => {
  const [gameData, setGameData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [teams, setTeams] = useState([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase
        .from('teams')
        .select('team_name, profile_picture');

      if (error) {
        console.error('Error fetching teams:', error);
      } else {
        const teamsWithScores = data.map(team => ({
          ...team,
          score: 0,
        }));
        setTeams(teamsWithScores);
      }
    };

    fetchTeams();
  }, []);


  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/questions.json');
      const questions = await response.json();
      setGameData(questions);
    };

    fetchQuestions();
  }, []);

  const handleBack = () => {
    setCurrentQuestion(null);
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const markQuestionAsAnswered = (categoryIndex, questionIndex) => {
    const newData = [...gameData];
    newData[categoryIndex].questions[questionIndex].answered = true;
    setGameData(newData);

    const updatedTeams = [...teams];
    updatedTeams[currentTeamIndex].score += parseInt(newData[categoryIndex].questions[questionIndex].value);
    setTeams(updatedTeams);
  };

  return (
    <div className="playground">
      {teams.length > 0 && (
        <div className="teams">
          {teams.map((team, index) => (
            <div key={index} className={`team ${index === currentTeamIndex ? 'active' : ''}`}>
              <img src={team.profile_picture} alt={team.team_name} />
              <h3>{team.team_name}</h3>
              <p>Score: {team.score}</p>
            </div>
          ))}
        </div>
      )}

      <div className="categories">
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
      </div>

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
