import React from "react";
import { useFavorites } from "./FavoritesContext";

const FavoritesList = () => {
  const { favorites } = useFavorites();

  return (
    <div className="participant-list">
      {favorites.map((participant) => (
        <div key={participant.id} className="fav-participant-card">
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
          <div className="participant-name">{participant.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
