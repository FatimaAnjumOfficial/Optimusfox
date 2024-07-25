import React from "react";
import FavouriteButton from "./FavouriteButton";

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
        <FavouriteButton />
      </div>
    </div>
  );
}

export default Card;
