import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetchdata = () => {
  const [data, setdata] = useState([]);
  const fetch = async () => {
    const result = await axios.get("http://localhost:3000/Data");
    setdata(result.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>This is Fetch Data</h1>
      {data.map((ele) => ele.title)}
    </div>
  );
};

export default Fetchdata;
