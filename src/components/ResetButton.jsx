import React from "react";

const ResetButton = ({ setDrumArray }) => {
  const resetHandler = () => {
    const soundPlayer = {
      kick: false,
      snare: false,
      hat: false,
      tom: false,
    };
    const dataArray = [];
    for (let i = 0; i < 16; i++) {
      dataArray[i] = structuredClone(soundPlayer);
    }
    setDrumArray(dataArray);
  };
  return (
    <button onClick={resetHandler} className="reset-button">
      <img src="/reset.svg" />
    </button>
  );
};

export { ResetButton };
