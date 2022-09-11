import React from "react";
import "../styles/Controls.css";

const StopButton = ({ setIsPlaying, drumIndex, setPlayingSequencerButton }) => {
  const stopHandler = () => {
    setIsPlaying(false);
    setPlayingSequencerButton(0);
    drumIndex.current = 0;
  };
  return (
    <button className="stop-button" onClick={stopHandler}>
      <img alt="play/pause button" src="/stop.svg" />
    </button>
  );
};

export { StopButton };
