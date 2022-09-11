import React from "react";
import "../styles/MiniScreen.css";

const MiniScreen = ({ activeButton }) => {
  return <div className="mini-screen">{activeButton}</div>;
};

export { MiniScreen };
