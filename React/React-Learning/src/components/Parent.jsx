import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      <Child showMessage={showMessage} />
    </div>
  );
}

export default Parent;
