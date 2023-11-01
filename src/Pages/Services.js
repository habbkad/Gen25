import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Outlet, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div>
      Services
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Button>
        </Card.Body>
      </Card>
      <Outlet />
    </div>
  );
}

export default Services;
