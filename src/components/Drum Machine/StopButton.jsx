import "../../styles/Controls.css";
import React from "react";

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
