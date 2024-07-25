import React, { useState } from "react";
import FavouriteUsers from "./FavouriteUsers";

function FavouriteButton() {
  const [fav, setFav] = useState(false);

  const favourite = fav ? "❤️" : "♡";

  const toggleFav = () => {
    setFav((prevFav) => !prevFav); //uses the previous state value (prevFav) to switch between true and false
  };

  return (
    <>
      <div>
        <button onClick={toggleFav}>{favourite}</button>
      </div>
    </>
  );
}

export default FavouriteButton;
