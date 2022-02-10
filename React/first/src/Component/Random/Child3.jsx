import React, { useContext } from "react";
import { setData } from "./Parent";

const Child3 = () => {
  const dataRecive = useContext(setData);
  return (
    <div>
      <h1>This is Child 3</h1>
      <h1>This is props {dataRecive}</h1>
      {/* <setData.Consumer>
        {(value) => <h1>This is props {value}</h1>}
      </setData.Consumer> */}
    </div>
  );
};

export default Child3;
