import React, { useState } from "react";
import { Card } from "react-bootstrap";
const CoWrite = () => {
  const [details, setdetails] = useState({
    name: "Yash",
    Phone: "34384384",
    Email: "@gmail.com",
    Address: "Adress",
  });
  return (
    <div>
      <div>
        Name:
        <input
          text="text"
          onChange={(e) => setdetails({ ...details, name: e.target.value })}
        />
        Phone Number:
        <input
          text="text"
          onChange={(e) => setdetails({ ...details, Phone: e.target.value })}
        />
        Email:
        <input
          text="email"
          onChange={(g) => setdetails({ ...details, Email: g.target.value })}
        />
        Address:
        <input
          text="text"
          onChange={(h) => setdetails({ ...details, Address: h.target.value })}
        />
      </div>
      <div>
        <Card body>
          Name:{details.name}
          <br />
          number:{details.Phone}
          <br />
          Email:{details.Email}
          <br />
          Address:{details.Address}
        </Card>
      </div>
    </div>
  );
};

export default CoWrite;
