import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/ParticipantList.css";
import { FavoritesProvider } from "./components/FavoritesContext";
import Display from "./Display";

function App() {
  return (
    <>
      <div>
        <FavoritesProvider>
          <Display />
        </FavoritesProvider>
      </div>
    </>
  );
}

export default App;
