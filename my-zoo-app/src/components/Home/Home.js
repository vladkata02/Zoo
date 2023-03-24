import React from "react";
import { Carousel, Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://efgcr95ic65.exactdn.com/wp-content/uploads/2020/09/tiger-in-zoo-trail-scaled.jpg?strip=all&lossy=1&ssl=1"
            alt="First slide"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption className="p-5 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Welcome to the Zoo</h3>
            <p>Explore the amazing world of animals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oregonzoo.org/sites/default/files/2020/05/01/H_ring-tailed-lemur.jpg"
            alt="Second slide"
            style={{ height: "700px", objectFit: "cover" }}
          />

          <Carousel.Caption className="p-5 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Ring-tailed lemurs</h3>
            <p className="lead">Get up close and personal with these curious creatures</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://nationalzoo.si.edu/sites/default/files/animals/giantpanda-010.jpg"
            alt="Third slide"
            style={{ height: "700px", objectFit: "cover" }}
          />

          <Carousel.Caption className="p-5 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Giant pandas</h3>
            <p className="lead">See these rare and beloved animals in person</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms.londonzoo.org/sites/default/files/styles/responsive/public/1440/729/1/2022-11/Asim-at-London-Zoo.jpg?itok=sxChnnU-"
            alt="Fourth slide"
            style={{ height: "700px", objectFit: "cover" }}
          />

          <Carousel.Caption className="p-5 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h3>Tigers</h3>
            <p className="lead">Come and meet our majestic tigers, with their stunning stripes and powerful presence.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};