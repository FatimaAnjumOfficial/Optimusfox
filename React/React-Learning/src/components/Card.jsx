import React from "react";
import Favourites from "./Favourites";

function Card({ participant }) {
  return (
    <div key={participant.id} className="participant-card">
      {participant.image ? (
        <img
          src={participant.image}
          alt={participant.name}
          className="participant-image"
        />
      ) : (
        <div className="participant-placeholder">
          {participant.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="participant-name">
        {participant.name}
        <Favourites />
      </div>
    </div>
  );
}

export default Card;
