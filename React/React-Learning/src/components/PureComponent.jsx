import React from "react";
import Counter from "./Counter";

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
