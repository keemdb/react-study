import React, { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };

  handleIncrease = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      num: this.state.num - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.num}</p>
        <button onClick={this.handleIncrease}>추가</button>
        <button onClick={this.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default Counter;
