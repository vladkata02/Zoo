import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-light text-muted mt-5">
    <hr />
      <Container>
        <Row className="justify-content-center">
          <Col md={3}>
            <h5>Find Us</h5>
            <ul className="list-unstyled">
              <li>ул. Христо Ботев 1</li>
              <li>Казанлък, Стара Загора</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: 123-456-7890</li>
              <li>Email: info@zoo.com</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><i className="fab fa-facebook fa-lg"></i> Facebook</li>
              <li><i className="fab fa-twitter fa-lg"></i> Twitter</li>
              <li><i className="fab fa-instagram fa-lg"></i> Instagram</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="text-muted">&copy; 2023 Zoo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}