import Card from "../card/card";
import "./apps.css";
import { Container, Row, Col } from "react-bootstrap";

const Apps = () => {
  return (
    <div className="apps">
      <Container>
        <h2>Our Apps</h2>
        <Row align="center">
          <Col>
            <Card
              imgSrc="https://picsum.photos/300/200"
              imgAlt="AfriQExpress"
              title="AfriQExpress"
              description="This is the card description. You can add more here."
              buttonText="Learn More"
              link="afriqexpress"
            />
          </Col>
          <Col>
            <Card
              imgSrc="https://picsum.photos/300/200"
              imgAlt="Card Image"
              title="AFriQPay"
              description="This is the card description. You can add more here."
              buttonText="Learn More"
              link="afriqpay"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Apps;
