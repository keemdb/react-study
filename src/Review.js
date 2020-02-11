import React, { Component } from "react";
import "./styles.css";

class Review extends Component {
  id = 1;
  state = {
    national: "",
    city: "",
    list: []
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    const { national, city, list } = this.state;
    this.setState({
      national: "",
      city: "",
      list: list.concat({ id: this.id, national, city })
    });
  };

  render() {
    const { national, city, list } = this.state;
    return (
      <div className="review">
        <h1>{this.props.title}</h1>
        <input
          name="national"
          value={national}
          placeholder="국적"
          onChange={this.handleChange}
        />
        <input
          name="city"
          value={city}
          placeholder="도시"
          onChange={this.handleChange}
        />
        <button onClick={this.handleInsert}>확인</button>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              id: {item.national} pw: {item.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Review;
