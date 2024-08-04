import React from "react";
import "../App.css";
import { FaFlagCheckered } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";

import { useParams } from "react-router-dom";
import { players } from "../utils/slider";
import "./PlayerProfile.css"; // Ensure you create this CSS file

import CountUp from "react-countup";

import Title from "../components/Title/Title";

const PlayerProfile = () => {
  const { playerName } = useParams();
  const player = players.find((p) => p.name === playerName);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <>
      <Title subTitle="Player Profile" title={player.name} />

      <div className="player-profile-container">
        <div className="player-card">
          <div className="jersey-number">{player.jerseyNumber}</div>
          <img src={player.image} alt={player.name} className="player-image" />
        </div>
        <div className="player-details-card">
          <h1 className="player-name">{player.name}</h1>

          <p className="player-price">Age: {player.price}</p>
          <h1 className="player-name">Position:</h1>
          <p className="player-price"> {player.detail}</p>
          <h1 className="player-name">Age:</h1>
          <p className="player-price">{player.price}</p>
          <h1 className="player-name">Season:</h1>
          <p className="player-price">2023-24</p>
          <h1 className="player-name">Stats:</h1>
          <span className="player-stats">
            <FaFlagCheckered className="icons" />

            <CountUp start={35} end={50} duration={4} />
            {" + Matches"}

            <GiSoccerBall className="icons" />

            <CountUp start={5} end={17} duration={4} />
            {" + Goals"}
          </span>
        </div>
      </div>
    </>
  );
};

export default PlayerProfile;
