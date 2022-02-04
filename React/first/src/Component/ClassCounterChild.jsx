import React, { Component } from "react";

export default class ClassCounterChild extends Component {
  render() {
    return (
      <div>
        <h1>Hello child component</h1>
        <h1>{this.props.countvalue}</h1>
      </div>
    );
  }
}
