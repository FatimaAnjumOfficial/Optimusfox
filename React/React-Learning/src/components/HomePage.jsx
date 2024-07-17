import React from "react";

const HomePage = (prop) => {
  return (
    <div>
      <h1>Welcome {prop.text.name}</h1>
    </div>
  );
};

export default HomePage;
