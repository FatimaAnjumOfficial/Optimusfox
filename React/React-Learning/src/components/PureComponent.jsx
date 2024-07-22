import React from "react";

//eg. increment hr br +1 kr deta h (value change)
//value same ho or button pe br br click kren gy tw rendering hogi.Pure Component br br rendoring nhi krta

const PureComponent = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default React.memo(PureComponent);
