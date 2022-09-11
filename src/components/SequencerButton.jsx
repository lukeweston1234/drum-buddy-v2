import React from "react";
import "../styles/SequencerButton.css";

const SequencerButton = ({
  index,
  setDrumArray,
  drumArray,
  activeButton,
  playingSequencerButton,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const tempArray = structuredClone(drumArray);
    let tempItem = structuredClone(tempArray[index][activeButton]);
    tempItem = !tempItem;
    tempArray[index][activeButton] = tempItem;
    setDrumArray(tempArray);
    console.log(tempArray);
  };
  return (
    <button
      onClick={handleClick}
      className={
        playingSequencerButton === index
          ? "playing-sequencer-button "
          : "sequencer-button"
      }
    ></button>
  );
};

export { SequencerButton };
