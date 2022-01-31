import React from "react";
import { Card, Button } from "react-bootstrap";
const Cards = (props) => {
  return (
    <div style={{ display: "flex" }}>
      {props.cards1.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.Name}</Card.Title>
            <Card.Text>{item.des}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
