import React from "react";
import { useState } from "react";

const MyTime = () => {
  const [t, sett] = useState(0);
  setTimeout(() => {
    sett(t + 1);
  }, 1000);
  return (
    <div>
      <h1>Hii {t}</h1>
    </div>
  );
};

export default MyTime;
