import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BuilderHeader from "./components/BuilderHeader/BuilderHeader";

const MainBuilder = ({ elements }) => {
  const[builderElement , setbuilderElement] = useState(null);
  useEffect(() => {
    if(!elements){
      return
    }
    setbuilderElement(elements)
  }, [elements]) 
  return (
    <>
      <Container fluid>
        <Row className="p-3">
          <Col md={3}></Col>
          <Col md={5} className="shadow-lg  min-h-screen border-spacing-1 p-0">
            <BuilderHeader />
            <div className="ckMainWidgetLoader">
              {
                builderElement && builderElement.map((item) => {
                  return (
                    item
                  )
                })
              }
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default MainBuilder;
