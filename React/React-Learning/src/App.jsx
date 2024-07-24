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
import ParticipantList from "./components/ParticipantList";
import "./components/ParticipantList.css";

function Website() {
  {
    /*const [count, setCount] = useState(0);
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
  };*/
  }

  const participants = [
    {
      id: 1,
      name: "Fatima",
      image:
        "data:image/jpeg;base64,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",
    },
    { id: 2, name: "Nimra", image: "" },
    {
      id: 3,
      name: "Bisma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShssm8JONbJAkXBcgKCVqrws10SQvjs14HVg&s",
    },
    { id: 4, name: "Meher Bano", image: "" },
    // Add more participants as needed
  ];

  return (
    <>
      <div className="app-container">
        <h1>Meeting Participants</h1>
        <ParticipantList participants={participants} />

        {/*<Header />
         <HomePage/> 
        <HomePage text={{ name: "Fatima" }} />
        <h2>Claim your reward Now!</h2>
        <Timer endDate={endDate} />
        {/*endDate is an JS `Date` object representing the target end time. It is a prop passed to the Timer component
        <br />
        <FormUseState />
        <br />
        <Form />
        <PureComponent title={title} content={content} />
        <button onClick={changeTitle}>Change Title</button>{" "}
        <button onClick={changeContent}>Change Content</button>
        <br />
        <WithCounterHoc component={Counter} />
        <br />
        <LoggedIn />
        <br />
        <NameList />
        <br />
        <UpdateData />
        <ContactInfo />
        <Parent />*/}
      </div>
    </>
  );
}
{
  /*}
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
};*/
}

export default Website;
