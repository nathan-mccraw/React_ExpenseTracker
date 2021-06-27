import React, { Component } from "react";
import TextInput from "./TextInput";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <TextInput
          className="location"
          id="location"
          placeholder="Location of Expense"
        />
      </div>
    );
  }
}

export default Form;
