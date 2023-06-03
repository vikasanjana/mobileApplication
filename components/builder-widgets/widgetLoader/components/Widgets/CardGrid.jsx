import React from "react";
import { useDrag } from "react-dnd";

const CardGrid = ({ title, icon, link, name }) => {
  const ItemTypes = {
    BOX: "box",
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, html: "<div>Hello, Widget!</div>" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
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
      data-testid={`box`}
    >
      <div className="p-2 flex justify-center flex-col items-center gap-2">
        <i className={`bi bi-${icon}`}></i>
        <p className="m-0">{title}</p>
      </div>
    </div>
  );
};

export default CardGrid;
