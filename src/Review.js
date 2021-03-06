import React, { Component } from "react";

class Review extends Component {
  state = {
    userid: "",
    userpw: "",
    list: []
  };
  id: 1;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    e.preventDefault();
    const { userid, userpw, list } = this.state;
    this.setState({
      userid: "",
      userpw: "",
      list: list.concat({ id: this.id, userid, userpw })
    });
    this.id += 1;
  };

  render() {
    const { userid, userpw, list } = this.state;
    return (
      <div className="review">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleInsert}>
          <input
            name="userid"
            value={userid}
            placeholder="ID"
            onChange={this.handleChange}
          />
          <input
            name="userpw"
            type="password"
            value={userpw}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">ok</button>
        </form>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              ID: {item.userid} / Password {item.userpw}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Review;
