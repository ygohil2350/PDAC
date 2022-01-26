import "./my.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Card, Form } from "react-bootstrap";
import { Home } from "./Component/Home";
import { EmpList } from "./Component/EmpList";
import { Footer } from "./Component/Footer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Row>
        <Col>
          <EmpList dept="Mechanical" emp={["Shara", "David", "Sharp"]} />
        </Col>
        <Col>
          <EmpList dept="Civil" emp={["Ram", "Rahim"]} />
        </Col>
        <Col>
          <EmpList dept="Electrical" emp={["ahmad", "Rohan", "Ankit"]} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;

// rsc
// rcc
