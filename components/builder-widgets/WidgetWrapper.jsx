import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoaderWrapper from "./widgetLoader/LoaderWrapper";
import { useDrop } from "react-dnd";
import MainBuilder from "../builder/MainBuilder";

const WidgetWrapper = () => {
  const [html, setHtml] = useState(null);
  const ItemTypes = {
    BOX: "box",
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      setHtml(item.html);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  return (
    <Container fluid>
      <Row>
        <Col md={4} className="my-2">
          <LoaderWrapper />
        </Col>

        <Col
          md={8}
          ref={drop}
          data-testid="dustbin"
          className="shadow-orange-50 min-h-screen border-spacing-1"
        >
          {isActive ? (
            "Release to drop"
          ) : (
            <MainBuilder />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetWrapper;
