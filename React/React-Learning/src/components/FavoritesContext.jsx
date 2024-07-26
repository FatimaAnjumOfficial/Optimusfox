import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (participant) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === participant.id)) {
        return prevFavorites.filter((fav) => fav.id !== participant.id);
      } else {
        return [...prevFavorites, participant];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
