import React, { useEffect, useState } from "react";
import { ticketServiceFactory } from "../../services/ticketService";
import { useService } from "../../hooks/useService";
import { useTicketContext } from "../../contexts/TicketContext";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Tickets.css";

export const Tickets = () => {
  const [numTickets, setNumTickets] = useState(1);
  const { userId } = useAuthContext();
  const { createTicket } = useTicketContext();
  const [totalPrice, setTotalPrice] = useState(10);
  const [boughtTickets, setBoughtTickets] = useState([]);
  const ticketService = useService(ticketServiceFactory);

  useEffect(() => {
    Promise.all([
      ticketService.getAll(userId),
    ]).then((tickets) => {
      const userTickets = tickets[0].filter(ticket => ticket.userId === userId);
      setBoughtTickets(userTickets);
    });
  }, [userId]);

  const handleNumTicketsChange = (e) => {
    const newNumTickets = e.target.value;
    setNumTickets(newNumTickets);
    setTotalPrice(newNumTickets * 10);
  };

  const handleBuyTickets = async () => {
    const newBoughtTicket = {
      numTickets: numTickets,
      totalPrice: totalPrice,
      userId: userId
    };

    await createTicket(newBoughtTicket);

    setBoughtTickets([...boughtTickets, newBoughtTicket]);
    setNumTickets(1);
    setTotalPrice(10);
    alert(`Thank you for your purchase of ${numTickets} tickets!`);
  };
  
  return (
    <div className="ticket-card">
      <Card>
        <Card.Body>
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
                    <Form.Control
                      type="text"
                      readOnly
                      value={`${totalPrice} BGN`}
                    />
                  </Form.Group>
                  <Button variant="success" onClick={handleBuyTickets}>
                    Buy Tickets
                  </Button>
                </Form>
              </Col>
              <Col md={6}>
                {boughtTickets.length > 0 && (
                  <Card className="p-3 mt-3 shadow-green">
                    <h2>Your Purchased Tickets:</h2>
                    <ul>
                      {boughtTickets.map((ticket, index) => (
                        <li key={index}>
                          {ticket.numTickets} tickets - {ticket.totalPrice} BGN
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};