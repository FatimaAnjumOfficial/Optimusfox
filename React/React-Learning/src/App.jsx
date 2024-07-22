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
import Timer from "./components/Timer";
import Form from "./components/Form";

function Website() {
  const [count, setCount] = useState(0);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 12);
  endDate.setHours(endDate.getHours() + 4);
  endDate.setMinutes(endDate.getMinutes() + 56);
  endDate.setSeconds(endDate.getSeconds() + 23);

  return (
    <>
      <div>
        <Header />
        {/* <HomePage/> */}
        <HomePage text={{ name: "Fatima" }} />
        <h2>Claim your reward Now!</h2>
        <Timer endDate={endDate} />
        {/*endDate is an JS `Date` object representing the target end time. It is a prop passed to the Timer component*/}
        <br />
        <Form />
        <br />
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
