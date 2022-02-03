import React from "react";

const Child = (props) => {
  return (
    <div>
      <h1>This is my child component</h1>
      {props.Childata.map((item) => (
        <div>
          <h1>my name is {item.name}</h1>
          <h1>my age is {item.age}</h1>
          <h1>my Roll No is {item.no}</h1>
        </div>
      ))}
      ;
    </div>
  );
};

export default Child;
