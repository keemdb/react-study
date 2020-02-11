import React, { Component } from "react";

class InputMulti extends Component {
  state = {
    national: "",
    city: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const style = {
      backgroundColor: "#eee",
      padding: "10px"
    };

    const { national, city } = this.state;

    return (
      <div style={style}>
        <h1>Test 3</h1>
        <h2>Input Multiple</h2>
        <input
          name="national"
          value={national}
          placeholder="나라"
          onChange={this.handleChange}
        />
        <input
          name="city"
          value={city}
          placeholder="도시"
          onChange={this.handleChange}
        />
        <p>
          {national}의 수도는 {city}입니다.
        </p>
      </div>
    );
  }
}

export default InputMulti;
