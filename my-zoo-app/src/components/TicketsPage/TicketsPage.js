import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const TicketsPage = () => {
  const [numTickets, setNumTickets] = useState(1);
  const [totalPrice, setTotalPrice] = useState(10);

  const handleNumTicketsChange = (e) => {
    const newNumTickets = e.target.value;
    setNumTickets(newNumTickets);
    setTotalPrice(newNumTickets * 10);
  };

  const handleBuyTickets = () => {
    alert(`Thank you for your purchase of ${numTickets} tickets!`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Buy Tickets</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formNumTickets">
              <Form.Label>Number of tickets</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="10"
                value={numTickets}
                onChange={handleNumTicketsChange}
              />
            </Form.Group>
            <Form.Group controlId="formTotalPrice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control type="text" readOnly value={`${totalPrice} USD`} />
            </Form.Group>
            <Button variant="primary" onClick={handleBuyTickets}>
              Buy Tickets
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketsPage;