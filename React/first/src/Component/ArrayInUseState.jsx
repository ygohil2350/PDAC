import React, { useState } from "react";

const ArrayInUseState = () => {
  const [text, settext] = useState("");
  const [data, setdata] = useState([]);
  const handelInputValue = (ele) => {
    settext(ele.target.value);
  };
  const getclicked = () => {
    if (text !== "") setdata([...data, text]);
  };

  return (
    <div>
      <h1>This is a Array in use state</h1>
      <input type="text" placeholder="Name" onChange={handelInputValue} />
      <button onClick={getclicked}>Submit</button>
      <ul>
        {data.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayInUseState;
