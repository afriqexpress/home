import "./home.css";
import Navbar from "../components/navbar/Navbar";

import { Container, Row, Col } from "react-bootstrap";

import PreregisterSection from "../components/preregister/preregistersection";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Row className="rows">
          <Col className="columns">
            <Navbar></Navbar>
          </Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
            <h1>Image/Video</h1>
          </Col>
          <Col className="columns">
            <h1>Home</h1>
          </Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
            <Row className="rows">
              <h1>AfriQExpress</h1>
            </Row>
            <Row className="rows">
              <Col className="columns">1 of 3</Col>
              <Col className="columns">2 of 3</Col>
              <Col className="columns">3 of 3</Col>
            </Row>
          </Col>
          <Col className="columns">
            <Row className="rows">
              <h1>AfriQPay</h1>
            </Row>
            <Row className="rows">
              <Col className="columns">1 of 3</Col>
              <Col className="columns">2 of 3</Col>
              <Col className="columns">3 of 3</Col>
            </Row>
          </Col>
        </Row>
        <Row className="rows">
          <Col className="columns">
            <PreregisterSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
