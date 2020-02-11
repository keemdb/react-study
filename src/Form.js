import React, { Component } from "react";

class Form extends Component {
  id = 1;
  state = {
    user: "",
    pass: "",
    list: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    e.preventDefault();
    const { user, pass, list } = this.state;
    this.setState({
      user: "",
      pass: "",
      list: list.concat({ id: this.id, user, pass })
    });
    this.id += 1;
  };

  render() {
    const { user, pass, list } = this.state;
    return (
      <div className="test2">
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
        <form onSubmit={this.handleInsert}>
          <input
            name="user"
            value={user}
            placeholder="ID"
            onChange={this.handleChange}
          />
          <input
            name="pass"
            value={pass}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">확인</button>
        </form>
        <p>
          ID: {user}, PW: {pass}
        </p>
        <h4>User List</h4>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              ID: {item.user}, PW: {item.pass}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
