import React from "react";
import "../../styles/Controls.css";

const BPM = ({ bpm, setBPM }) => {
  const clickHandler = (e) => {
    if (e.target.value <= 220) {
      setBPM(e.target.value);
    } else {
      setBPM(220);
    }
  };
  return (
    <input className="bpm-input" onChange={clickHandler} value={bpm}></input>
  );
};

export { BPM };
