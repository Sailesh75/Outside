import React from "react";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    MousePositionX: 0,
    MousePositionY: 0,
  });

  const updatePosition = (event) => {
    setPosition({
      MousePositionX: event.clientX,
      MousePositionY: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return { position };
};

export default useMousePosition;
