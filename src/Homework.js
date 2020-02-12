import React, { Component } from "react";

class Homework extends Component {
  state = {
    userid: "",
    userpw: "",
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handlePrevent = e => {
    e.preventDefault();
  }

  render() {
    const { userid, userpw } = this.state;
    return (
      <div className="homework">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handlePrevent}>
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
          <button 
            type="submit"
            disabled={userpw.length < 6}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Homework;
