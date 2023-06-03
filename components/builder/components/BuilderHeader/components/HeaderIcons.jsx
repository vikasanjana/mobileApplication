import React from "react";
import { Button } from "react-bootstrap";

const HeaderIcons = ({item , iconType,size}) => {
  return (
    <Button className={`d-inline bg-transparent border-0 p-0 text-${iconType}`}>
      <i className={`bi bi-${item.icon}`} style={{
        fontSize:size
      }}></i>
    </Button>
  );
};

export default HeaderIcons;
