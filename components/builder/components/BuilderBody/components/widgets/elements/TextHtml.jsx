import React from "react";
import { Container} from "react-bootstrap";

const TextHtml = ({element, style}) => {

  return (
    <Container fluid className="textWidgetHtml widget">
        <div dangerouslySetInnerHTML={{ __html: element }} style={style} />
    </Container>
  );
};

export default TextHtml;
