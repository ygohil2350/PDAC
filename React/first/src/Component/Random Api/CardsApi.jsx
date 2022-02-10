import React from "react";
import { Card, Button } from "react-bootstrap";
const CardsApi = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.value.userId}</Card.Title>
          <Card.Title>{props.value.title}</Card.Title>
          <Card.Text>{props.value.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsApi;
