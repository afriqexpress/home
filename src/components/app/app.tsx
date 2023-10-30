import Card from "../card/card";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container>
        <Row align="center">
          <Col>
            <Card
              imgSrc="https://picsum.photos/300/200"
              imgAlt="Card Image"
              title="Card Title"
              description="This is the card description. You can add more here.This is the card description. You can add more here.This is the card description. You can add more here.This is the card description. You can add more here."
              buttonText="Learn More"
              link=""
            />
          </Col>
          <Col>
            <Card
              imgSrc="https://picsum.photos/300/200"
              imgAlt="Card Image"
              title="Card Title"
              description="This is the card description. You can add more here.This is the card description. You can add more here.This is the card description. You can add more here.This is the card description. You can add more here."
              buttonText="Learn More"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
