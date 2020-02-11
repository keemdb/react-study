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
      <div className="test2">
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
        <p>{this.state.num}</p>
        <button onClick={this.handleIncrease}>추가</button>
        <button onClick={this.handleDecrease}>감소</button>
      </div>
    );
  }
}

export default Counter;
