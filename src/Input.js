import React, { Component } from "react";

class Input extends Component {
  state = {
    national: ""
  };

  handleChange = e => {
    this.setState({
      national: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Test 2</h1>
        <h2>Input</h2>
        <input
          value={this.state.national}
          placeholder="국적"
          onChange={this.handleChange}
        />
        <p>이곳은 {this.state.national}입니다.</p>
      </div>
    );
  }
}

export default Input;
