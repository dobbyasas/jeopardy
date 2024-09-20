import React, { useEffect, useState } from "react";
import supabase from "../configSupabase";
import './styles/StartScreen.scss';

const StartScreen = ({ onStart }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase
        .from('teams')
        .select('team_name, members, profile_picture');

      if (error) {
        console.error("Error fetching teams:", error);
      } else {
        setTeams(data);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="start-screen">
      <h1 className="title">LANOVKA JEOPARDY</h1>
      <h2 className="sub-title">DNEŠNÍ SOUTĚŽÍCÍ:</h2>

      <div className="teams-container">
        {teams.map((team, index) => (
          <div key={index} className="team-card animate">
            <img src={team.profile_picture} alt={team.team_name} className="team-logo" />
            <h3 className="team-name">{team.team_name}</h3>
            <ul className="team-members">
              {team.members.map((member, memberIndex) => (
                <li key={memberIndex} className="member-name">{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="start-button animate" onClick={onStart}>Start</button>
    </div>
  );
};

export default StartScreen;
