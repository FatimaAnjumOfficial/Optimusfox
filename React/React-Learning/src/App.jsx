import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import UpdateData from "./components/UpdateData";
import ContactInfo from "./components/ContactInfo";
import Parent from "./components/Parent";

function Website() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <HomePage/> */}
        <HomePage text={{ name: "Fatima" }} />
        <UpdateData />
        <ContactInfo />
        <Parent />
      </div>
    </>
  );
}

export default Website;

