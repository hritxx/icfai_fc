// PlayerDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const PlayerDetails = () => {
  const { id } = useParams();
  // Fetch player details using the id. This is a placeholder, replace with actual data fetching.
  const player = {
    id: 1,
    name: "Player 1",
    image: "image1.jpg",
    price: "100",
    detail: "Detail 1",
    bio: "Player bio goes here",
  };

  return (
    <div className="player-details">
      <img src={player.image} alt={player.name} />
      <h1>{player.name}</h1>
      <p>Price: ${player.price}</p>
      <p>{player.detail}</p>
      <p>{player.bio}</p>
    </div>
  );
};

export default PlayerDetails;
