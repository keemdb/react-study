import React, { Component } from "react";

class Homework extends Component {
  state = {
    userid: "",
    userpw: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { userid, userpw } = this.state;
    return (
      <div className="homework">
        <h1>{this.props.title}</h1>
        <input
          name="userid"
          placeholder="ID"
          value={userid}
          onChange={this.handleChange}
        />
        <input
          name="userpw"
          placeholder="Password"
          type="password"
          value={userpw}
          onChange={this.handleChange}
        />
        <button name="btn" type="submit">
          Sign in
          {
            userpw.length < 6
            ? console.log('ok')
            : console.log('no')
          }
        </button>
      </div>
    );
  }
}

export default Homework;
