import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BuilderHeader from "./components/BuilderHeader/BuilderHeader";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MainBuilder = ({ elements }) => {
  const [builderElement, setbuilderElement] = useState(null);
  useEffect(() => {
    if (!elements) {
      return;
    }
    setbuilderElement(elements);
  }, [elements]);

  const handleDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const newBuilderElements = Array.from(builderElement);
    const [movedElement] = newBuilderElements.splice(result.source.index, 1);
    newBuilderElements.splice(result.destination.index, 0, movedElement);

    setbuilderElement(newBuilderElements);
  };

  /**
   * Function for hanlde publish
   */
  const hanldePublish = (e) => {
    e.preventDefault()
    console.log('working')
  } 
  return (
    <Container fluid>
      <Row className="p-3">
        <Col md={3}></Col>
        <Col md={5} className="shadow-lg min-h-screen border-spacing-1 p-0">
          <BuilderHeader />
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="builder-elements">
              {(provided) => (
                <div
                  className="ckMainWidgetLoader"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {builderElement &&
                    builderElement.map((item, index) => {
                      return (
                        <Draggable
                          key={index + 1}
                          draggableId={`drag-item-${index + 1}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Col>
        <Col md={4}>
          <div className="flex justify-center">
            <Button onClick={hanldePublish}>Publish</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainBuilder;
