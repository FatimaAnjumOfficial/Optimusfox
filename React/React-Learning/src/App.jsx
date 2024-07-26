import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";
import FormUseState from "./components/FormUseState";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoggedIn from "./components/LoggedIn";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import PureComponent from "./components/PureComponent";
import Timer from "./components/Timer";
import UpdateData from "./components/UpdateData";
import WithCounterHoc from "./components/WithCounterHoc";
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
