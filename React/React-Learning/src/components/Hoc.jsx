import React from "react";

const Hoc = (props) => {
  const Component = props.component;
  return (
    <div>
      <Component />
    </div>
  );
};

export default Hoc;
