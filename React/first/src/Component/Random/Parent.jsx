import React, { createContext } from "react";
import Child1 from "./Child1";

export const setData = createContext();
const Parent = () => {
  const datafor = "Yash";
  return (
    <div>
      <h1>This is Parent</h1>
      <setData.Provider value={datafor}>
        <Child1 />
      </setData.Provider>
    </div>
  );
};

export default Parent;
