import { useState } from "react";
import "./Panel.css";

export const Panel = () => {
  const [Color, setgColor] = useState("#ffffff");

  const handleClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    setgColor(randomColor);
  };

  return (
    <div className="ColorChanger" style={{ backgroundColor: Color }}>
      <button className="btn-change-color" onClick={handleClick}>
        Cambiar Color
      </button>
    </div>
  );
};
