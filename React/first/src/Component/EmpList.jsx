import React from "react";
import { Card } from "react-bootstrap";
export const EmpList = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h3>{props.dept}</h3>
          <ul>
            {props.emp.map((item) => (
              <li>Mr.{item}</li>
            ))}
          </ul>
          ch
        </Card.Body>
      </Card>
    </div>
  );
};
