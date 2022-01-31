import React from "react";
import { useState } from "react";

const UseState = () => {
  //const [count, setCount] = useState(100);
  const [text, setText] = useState("");
  return (
    <div>
      {/* //   <button onClick={() => setCount(count + 1)}>Incremment</button>
    //   <h1>Value{count}</h1>
    //   <button onClick={() => setCount(count - 1)}>Decriment</button> */}
      <input text="text" onChange={(e) => setText(e.target.value)} />
      <h1>Hellow {text}</h1>
    </div>
  );
};

export default UseState;
