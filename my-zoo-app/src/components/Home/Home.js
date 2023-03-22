import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Image src="https://placehold.it/1200x600" fluid />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src="https://placehold.it/400x400" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://placehold.it/400x400" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://placehold.it/400x400" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

