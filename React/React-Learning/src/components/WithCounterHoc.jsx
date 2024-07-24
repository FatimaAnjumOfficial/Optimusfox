import React from "react";

const WithCounterHoc = (props) => {
  const Component = props.component;
  return (
    <div>
      <Component />
    </div>
  );
};

export default WithCounterHoc;
