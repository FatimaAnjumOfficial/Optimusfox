import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import Counter from "./components/Counter";
import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";
import FormUseState from "./components/FormUseState";
import Hoc from "./components/Hoc";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoggedIn from "./components/LoggedIn";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import PureComponent from "./components/PureComponent";
import Timer from "./components/Timer";
import UpdateData from "./components/UpdateData";

function Website() {
  const [count, setCount] = useState(0);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 12);
  endDate.setHours(endDate.getHours() + 4);
  endDate.setMinutes(endDate.getMinutes() + 56);
  endDate.setSeconds(endDate.getSeconds() + 23);

  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("Content");

  const changeTitle = () => {
    setTitle("Fatima");
  };

  const changeContent = () => {
    setContent("The IT Specialist");
  };

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
        <Hoc component={Counter} />
        <br />
        <FormUseState />
        <br />
        <Form />
        <PureComponent title={title} content={content} />
        <button onClick={changeTitle}>Change Title</button>{" "}
        <button onClick={changeContent}>Change Content</button>
        <br />
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
