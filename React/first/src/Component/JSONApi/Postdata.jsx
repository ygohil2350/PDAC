import axios from "axios";
import React, { useState } from "react";

const Postdata = () => {
  const [title, setitle] = useState();
  const [body, setbody] = useState();
  const [userId, setuserId] = useState();

  const go = () => {
    const request = { title, body, userId };
    axios.post("http://localhost:3000/Data", request);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setbody(e.target.value)}
      />
      <input
        type="text"
        placeholder="userId"
        onChange={(e) => setuserId(e.target.value)}
      />
      <br />
      <button onClick={go}> Sumbit</button>
    </div>
  );
};

export default Postdata;
