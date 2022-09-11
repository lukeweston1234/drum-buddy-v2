import React from "react";
import "../styles/MiniScreen.css";

const MiniScreen = ({ activeButton }) => {
  return (
    <div className="mini-screen">
      {`${activeButton[0].toUpperCase() + activeButton.slice(1)}`}
    </div>
  );
};

export { MiniScreen };
