import React from "react";
import FavouriteButton from "./FavouriteButton";
import { useFavorites } from "./FavoritesContext";

function Card({ participant }) {
  const { favorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === participant.id);

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
        <br/>
        <FavouriteButton participant={participant} isFavorite={isFavorite} />
      </div>
    </div>
  );
}

export default Card;
