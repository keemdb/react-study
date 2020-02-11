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
      <div className="test1">
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
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
