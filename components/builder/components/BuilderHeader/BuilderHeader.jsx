import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Humburger from "./components/Humburger";
import HeaderIcons from "./components/HeaderIcons";
import RightIcons from "./components/RightIconJson";

const BuilderHeader = () => {
  const [rightIcons, setRightIcons] = useState();
  useEffect(() => {
    if(!RightIcons) {
        return
    }
    setRightIcons(RightIcons)
  },[])
  return (
    <Container fluid>
      <Row>
        <div className="flex p-0 justify-between pb-2 border-blue-200  border-b-2 p-3">
          <div className="left flex gap-2 items-center">
            <Humburger />
            <h4>Page Name</h4>
          </div>
          <div className="right gap-2 flex items-center">
              {rightIcons && rightIcons.map((item) => {
                return(
                    <HeaderIcons item={item} key={item.id} iconType='dark' size='20px' />
                )
            })}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default BuilderHeader;
