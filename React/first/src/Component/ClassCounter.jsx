import React, { Component } from 'react';

export  class ClassCounter extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
        };
    };
    HandelIncriment(){
        this.setState((prevState)=>{counter:prevState.counter+1})
    }
    HandelDecriment(){
        this.setState((prevState)=>{counter:prevState.counter-1})

    }
  render() {
    return <div>
        <h1>count:{this.state.counter}</h1>
        <button onClick={}>Incriment</button> 
        <button onClick={}>Decriment</button> 
    </div>;

  }
}
