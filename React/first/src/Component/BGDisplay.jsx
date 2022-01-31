import React from "react";
import "./BGDisplay.css";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
const BGDisplay = () => {
  const [count, setCount] = useState("bulb_off");
  return (
    <div>
      <Row>
        <div className={count}>
          <h1>Bajaj</h1>
        </div>
      </Row>
      <Row>
        <div className="Y">
          <Button
            onClick={() => {
              setCount("bulb");
            }}
          >
            On
          </Button>
          <Button
            onClick={() => {
              setCount("bulb_off");
            }}
          >
            Off
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default BGDisplay;
