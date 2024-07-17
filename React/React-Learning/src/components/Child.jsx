import React from "react";

function Child({ showMessage })
{
  const handleClick = () => {
    showMessage("Hello from Child Component!");
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
}

export default Child;
