import React from "react";
import Counter from "./Counter";

//eg. increment hr br +1 kr deta h (value change)
//value same ho or button pe br br click kren gy tw rendering hogi.Pure Component br br rendoring nhi krta

class PureComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default PureComponent;
