import React, { Component } from "react";
import Counter from "./Counter";
import Input from "./Input";
import Review from "./Review";
import InputMulti from "./InputMulti";
import AddArr from "./AddArr";
import Form from "./Form";
import RefDom from "./RefDom";
import Homework from "./Homework";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Review title="review" />
        <Homework title="Homework" />
        <RefDom title="ex6" sub="ref로 DOM컨트롤" />
        <Form title="ex5" sub="Form" />
        <AddArr title="ex4" sub="Add Array" />
        <InputMulti title="ex3" sub="Input Multiple" />
        <Input title="ex2" sub="Input" />
        <Counter title="ex1" sub="Counter" />
      </div>
    );
  }
}

export default App;
