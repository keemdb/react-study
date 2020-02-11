import React, { Component } from "react";

class AddArr extends Component {
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
      <div>
        <h1>Test 4</h1>
        <h2>Add Array</h2>
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
        <button onClick={this.handleInsert}>확인</button>
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

export default AddArr;
