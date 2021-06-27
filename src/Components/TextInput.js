import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}>Where:</label>
        <input type="text" placeholder={this.props.placeholder}></input>
      </div>
    );
  }
}

export default TextInput;
