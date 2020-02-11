import React, { Component } from "react";
import Counter from "./Counter";
import Input from "./Input";
import InputMulti from "./InputMulti";
import AddArr from "./AddArr";

class App extends Component {
  render() {
    return (
      <div>
        <AddArr />
        <InputMulti />
        <Input />
        <Counter />
      </div>
    );
  }
}

export default App;
