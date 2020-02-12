import React, { Component } from "react";

class RefDom extends Component {
  state = {
    userid: "",
    userpw: "",
    list: []
  };
  id: 1;
  useridInput = React.createRef();

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
    if (!this.useridInput.current) return;
    this.useridInput.current.focus();
  };

  render() {
    const { userid, userpw, list } = this.state;
    return (
      <div className="test1">
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
        <form onSubmit={this.handleInsert}>
          <input
            name="userid"
            placeholder="ID"
            value={userid}
            onChange={this.handleChange}
            ref={this.usernameInput}
          />
          <input
            name="userpw"
            placeholder="Password"
            type="password"
            value={userpw}
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

export default RefDom;
