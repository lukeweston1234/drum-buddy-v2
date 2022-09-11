import React from "react";
import { useAudio } from "./useAudio";
import "../styles/DrumButton.css";

const DrumButton = ({ audio, name, activeButton, setActiveButton }) => {
  const buttonHandler = (e) => {
    setActiveButton(name);
    audio.play();
  };
  return (
    <button
      className={activeButton === name ? "active-drum-button" : "drum-button"}
      onClick={buttonHandler}
    />
  );
};

export { DrumButton };
