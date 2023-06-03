import React from "react";
import { Button } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const Humburger = () => {
  return (
    <Button className="d-inline bg-transparent border-0 p-0">
      <List size={20} color="dark" />
    </Button>
  );
};

export default Humburger;
