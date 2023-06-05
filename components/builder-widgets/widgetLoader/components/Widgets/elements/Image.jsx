import React from "react";
import { useDrag } from "react-dnd";

const Image = ({ title, icon, link, name, widgetHtml }) => {
  const ItemTypes = {
    BOX: "box",
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, element: widgetHtml },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      className="rounded-sm flex-1 cursor-pointer ckWidget"
      ref={drag}
      style={{ opacity }}
      data-testid={`box`}
    >
      <div className="p-2 flex justify-center flex-col items-center gap-2">
        <i className={`bi bi-${icon}`}></i>
        <p className="m-0">{title}</p>
      </div>
    </div>
  );
};

export default Image;
