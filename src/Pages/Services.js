import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div>
      Services hello buddy
      <br />
      <Button
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </Button>
    </div>
  );
}

export default Services;
