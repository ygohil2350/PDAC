import React, { useRef, useState, useEffect } from "react";

const UseRefTimer = () => {
  const [time, settime] = useState(0);
  const refval = useRef(null);
  useEffect(() => {
    refval.current = setTimeout(() => {
      settime(time + 1);
    }, 1000);
  }, [time]);
  return (
    <div>
      <h1>Timer:{time}</h1>
      <button
        onClick={() => {
          settime(0);
        }}
      >
        Clear Time
      </button>
    </div>
  );
};

export default UseRefTimer;
