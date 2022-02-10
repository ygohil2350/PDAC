import React, { useEffect, useState } from "react";
import CardsApi from "./CardsApi";
import axios from "axios";

const ParentApi = () => {
  const [data, setData] = useState([]);
  const getdatafrom = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(result.data);
  };
  useEffect(() => getdatafrom(), []);
  console.log(data);

  return (
    <div style={{ display: "contents" }}>
      {data.map((ele) => (
        <CardsApi value={ele} key={ele.id} />
      ))}
    </div>
  );
};

export default ParentApi;
