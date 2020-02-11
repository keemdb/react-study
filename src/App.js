import React, { Component } from "react";
import Counter from "./Counter";
import Input from "./Input";
import InputMulti from "./InputMulti";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Input />
        <InputMulti />
      </div>
    );
  }
}

export default App;
