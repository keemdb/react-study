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
    const style = {
      backgroundColor: "#eee",
      padding: "10px"
    };

    return (
      <div style={style}>
        <h1>Test 1</h1>
        <h2>Counter</h2>
        <p>{this.state.num}</p>
        <button onClick={this.handleIncrease}>추가</button>
        <button onClick={this.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default Counter;
