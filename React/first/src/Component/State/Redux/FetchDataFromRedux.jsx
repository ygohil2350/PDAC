import React from "react";
import { useSelector } from "react-redux";
const FetchDataFromRedux = () => {
  const selector = useSelector((ele) => ele.sampleReducer.myState);
  return (
    <div>
      <h1>Fetchin data from redux</h1>
      {selector.map((ele) => (
        <div key={ele.id}>
          <h1>UserID:{ele.userId}</h1>
          <h1>ID:{ele.id}</h1>
          <h1>title:{ele.title}</h1>
          <h1>body:{ele.body}</h1>
        </div>
      ))}
    </div>
  );
};

export default FetchDataFromRedux;
