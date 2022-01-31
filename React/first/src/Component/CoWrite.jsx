import React, { useState } from "react";
import { Card } from "react-bootstrap";
const CoWrite = () => {
  const [name, setName] = useState("Name");
  const [number, setNumber] = useState("Number");
  const [Email, setEmail] = useState("Email");
  const [address, setAddress] = useState("Address");
  return (
    <div>
      <div>
        Name:
        <input text="text" onChange={(e) => setName(e.target.value)} />
        Phone Number:
        <input text="text" onChange={(f) => setNumber(f.target.value)} />
        Email:
        <input text="email" onChange={(g) => setEmail(g.target.value)} />
        Address:
        <input text="text" onChange={(h) => setAddress(h.target.value)} />
      </div>
      <div>
        <Card body>
          Name:{name}
          <br />
          number:{number}
          <br />
          Email:{Email}
          <br />
          Address:{address}
        </Card>
      </div>
    </div>
  );
};

export default CoWrite;
