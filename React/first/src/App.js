import"./my.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Row,Col,Card,Form } from "react-bootstrap";
function App() {
  return (
    <div>
      <h1>Row and column</h1>
      <Row>
        <Col>
        <Form>
          <Form.Control Placeholder="Pationt Name" className="m-2"/>
          <Form.Control Placeholder="Pationt city" className="m-2"/>
          <Form.Control Placeholder="Pationt ID" className="m-2"/>
          <Button className="m-2">Submit</Button>
          <Button>Reset</Button>
        </Form>
        </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </Col>
      </Row>
    </div>
  );
}

export default App;
