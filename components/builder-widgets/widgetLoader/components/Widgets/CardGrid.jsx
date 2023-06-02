import React from "react";

const CardGrid = ({title, icon,link}) => {
  return (
    <div className="rounded-sm flex-1 cursor-pointer ckWidget">
      <div className="p-2 flex justify-center flex-col items-center gap-2">
        <i className={`bi bi-${icon}`}></i>
        <p className="m-0">{title}</p>
      </div>
    </div>
  );
};

export default CardGrid;
