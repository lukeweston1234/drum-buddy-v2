import React, { useEffect, useState } from "react";
import "../styles/SequencerButton.css";

const SequencerButton = ({
  index,
  setDrumArray,
  drumArray,
  activeButton,
  playingSequencerButton,
}) => {
  const [buttonClass, setButtonClass] = useState("sequencer-button");
  useEffect(() => {
    const cssHandler = () => {
      if (playingSequencerButton === index) {
        setButtonClass("playing-sequencer-button");
      } else if (drumArray[index][activeButton]) {
        setButtonClass("seleceted-sequencer-button");
      } else {
        setButtonClass("sequencer-button");
      }
    };
    cssHandler();
  }, [index, drumArray, activeButton, playingSequencerButton]);

  const handleClick = (e) => {
    e.preventDefault();
    const tempArray = structuredClone(drumArray);
    let tempItem = structuredClone(tempArray[index][activeButton]);
    tempItem = !tempItem;
    tempArray[index][activeButton] = tempItem;
    setDrumArray(tempArray);
    console.log(tempArray);
  };
  return <button onClick={handleClick} className={buttonClass}></button>;
};

export { SequencerButton };
