import React, { useReducer } from "react";

export const initalstate = {
  counter: 0,
};
export const reducer = (state, action) => {
  if (action.type === "incriment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decriment") {
    return { counter: state.counter - 1 };
  }
};
const CounterWithReduse = () => {
  const [count, dispach] = useReducer(reducer, initalstate);

  return (
    <div>
      <h1>Hellow useReduce </h1>
      <h1>Count:{count.counter}</h1>
      <button onClick={() => dispach({ type: "incriment" })}>Increment</button>
      <button onClick={() => dispach({ type: "decriment" })}>Decrement</button>
    </div>
  );
};

export default CounterWithReduse;
