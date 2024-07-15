import React from "react";
import "./Scorecard.css"; // Import the CSS for styling

const Scorecard = ({ match }) => {
  return (
    <div className="s-container scorecard">
      <div className="teams-row">
        <div className="team">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="team-logo"
          />
          <span className="team-name">{match.team1.name}</span>
        </div>
        <div className="score">
          <span>{match.team1.score}</span> - <span>{match.team2.score}</span>
        </div>
        <div className="team">
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="team-logo"
          />
          <span className="team-name">{match.team2.name}</span>
        </div>
      </div>
      <div className="match-info">
        <span>{match.date}</span> | <span>{match.venue}</span>
      </div>
    </div>
  );
};

export default Scorecard;
