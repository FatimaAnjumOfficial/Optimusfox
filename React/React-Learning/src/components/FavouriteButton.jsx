import React from "react";
import { useFavorites } from "./FavoritesContext";

function FavouriteButton({ participant, isFavorite }) {
  const { toggleFavorite } = useFavorites();
  const fav = isFavorite ? "❤️" : "♡";

  return <button onClick={() => toggleFavorite(participant)}>{fav}</button>;
}

export default FavouriteButton;
