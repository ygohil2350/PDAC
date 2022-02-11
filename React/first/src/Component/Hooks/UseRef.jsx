import React, { useRef } from "react";

const UseRef = () => {
  const inputE1 = useRef(null);
  const fun = () => {
    inputE1.current.focus();
  };

  return (
    <div>
      <input ref={inputE1} type="text" />
      <button onClick={fun}>Sumbit</button>
    </div>
  );
};

export default UseRef;
