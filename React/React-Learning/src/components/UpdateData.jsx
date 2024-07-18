import React, { useState, useEffect } from "react";

const UpdateData = () => {
  const [data, setData] = useState("Lahore");
  const [updateRequested, setUpdateRequested] = useState(false);

  useEffect(() => {
    if (updateRequested) {
      const res = prompt("Do you update your location? y/n", "");
      if (res === "y") {
        setData("Karachi");
      }
      setUpdateRequested(false);
    }
  }, [updateRequested]);

  const handleUpdate = () => {
    setUpdateRequested(true);
  };

  return (
    <div>
      {data} <button onClick={handleUpdate}>Update Location</button>
    </div>
  );
};

export default UpdateData;
