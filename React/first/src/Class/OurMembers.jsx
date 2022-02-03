import React, { Component } from "react";

class Ourmember extends Component {
  state = { name: "Yash", age: 22 };
  render() {
    return (
      <div>
        <h1>
          This is Class component {this.state.name} age:{this.state.age}
        </h1>
      </div>
    );
  }
}
export default Ourmember;
