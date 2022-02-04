import React, { Component } from "react";
import ClassCounterChild from "./ClassCounterChild";

export class ClassCounter extends Component {
  state = {
    count: 0,
  };

  //   handleClickI = (e) => {
  //     const count = this.state.count;
  //     this.setState({ count: count + 1 });
  //   };

  //   handleClickD = (e) => {
  //     const count = this.state.count;
  //     this.setState({ count: count - 1 });
  //   };
  HandelIncriment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  HandelDecriment = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <ClassCounterChild countvalue={this.state.count} />
        <button onClick={this.HandelIncriment}>Incriment</button>
        <button onClick={this.HandelDecriment}>Decriment</button>
      </div>
    );
  }
}
