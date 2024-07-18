import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import UpdateData from "./components/UpdateData";
import ContactInfo from "./components/ContactInfo";
import Parent from "./components/Parent";
import LoggedIn from "./components/LoggedIn";
import NameList from "./components/NameList";
import Header from "./components/Header";

function Website() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        {/* <HomePage/> */}
        <HomePage text={{ name: "Fatima" }} />
        <LoggedIn />
        <br />
        <NameList />
        <br />
        <UpdateData />
        <ContactInfo />
        <Parent />
      </div>
    </>
  );
}

export default Website;
