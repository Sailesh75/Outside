import React from "react";
import useMousePosition from "./customHook/useMousePosition";

const Box = ({ color }) => {
  const { position } = useMousePosition();
  const x = position.MousePositionX;
  const y = position.MousePositionY;

  const getShape = () => {
    if (x < window.innerWidth / 2 && y < window.innerHeight / 2) {
      return "circle";
    } else if (x >= window.innerWidth / 2 && y < window.innerHeight / 2) {
      return "square";
    } else if (x < window.innerWidth / 2 && y >= window.innerHeight / 2) {
      return "arrow-up";
    } else {
      return "rectangle";
    }
  };

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <div className={getShape()} />
    </div>
  );
};

export default Box;
