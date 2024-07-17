import React, { useState } from "react"; //1 hi line me different hooks use krskte hain {useState, useEffect}

const UpdateData = () => {
  //destructoring state
  const [data, setData] = useState("Lahore");

  return (
    <div>
      {data} <button onClick={() => setData("Karachi")}>Update Location</button>
    </div>
  );
};

export default UpdateData;
