import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoaderWrapper from "./widgetLoader/LoaderWrapper";
import { useDrop } from "react-dnd";
import MainBuilder from "../builder/MainBuilder";

const WidgetWrapper = () => {
  const [elements, setElements] = useState([]);
  const ItemTypes = {
    BOX: "box",
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      console.log('element on widgewrapper.jsx', item.element) 
      setElements((prevElements) => [...prevElements, item.element]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={3} className="my-2">
          <LoaderWrapper />
        </Col>

        <Col
          md={9}
          ref={drop}
          data-testid="dustbin"
          className="shadow-orange-50 min-h-screen border-spacing-1"
        >
          {isActive ? (
           <MainBuilder elements={elements} />
          ) : (
            <MainBuilder elements={elements} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetWrapper;
