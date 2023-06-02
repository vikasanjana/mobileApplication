import React from "react";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const WidgetSearch = () => {
  return (
    <Form className="d-flex">
      <div className="position-relative flex w-100">
        <Form.Control
          type="search"
          placeholder="Search"
          className="   py-3 px-3"
          aria-label="Search"
          style={{
            backgroundColor:"#add8e636"
          }}
        />
        <Button className="bg-transparent outline-none border-0 position-absolute right-3 top-4">
            <Search className="text-black" />
        </Button>
      </div>
    </Form>
  );
};

export default WidgetSearch;
