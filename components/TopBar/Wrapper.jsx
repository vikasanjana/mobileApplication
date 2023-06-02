import React from "react";
import { Nav, Navbar, Container, Form, FormLabel } from "react-bootstrap";
import { Code } from 'react-bootstrap-icons';

const Wrapper = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto bg-blue-100 p-3">
              <div className="flex gap-4 position-relative">
                <FormLabel>In-app Page</FormLabel>
                <Form.Select
                  aria-label="Default select example"
                  className="p-2 "
                  style={
                    {
                      width:200,
                      appearance:'none'
                    }
                  }
                >
                  <option value="Home">Home</option>
                  <option value="About">About</option>
                </Form.Select>
                <Code className="form-select-icon position-absolute" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Wrapper;
