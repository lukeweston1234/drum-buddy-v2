import React from "react";
import { SequencerButton } from "./SequencerButton";
import "../styles/DrumSequencer.css";

const DrumSequencer = ({
  drumArray,
  setDrumArray,
  activeButton,
  playingSequencerButton,
}) => {
  return (
    <div>
      <ul className="drum-sequencer">
        {drumArray.map((item, index) => {
          return (
            <SequencerButton
              className={
                activeButton === index
                  ? "active-sequencer"
                  : "default-sequencer"
              }
              key={index}
              index={index}
              drumArray={drumArray}
              setDrumArray={setDrumArray}
              activeButton={activeButton}
              playingSequencerButton={playingSequencerButton}
            />
          );
        })}
      </ul>
      <div className="sequencer-numbers">
        <h3 className="number-label" id="one">
          1
        </h3>
        <h3 className="number-label" id="two">
          2
        </h3>
        <h3 className="number-label" id="three">
          3
        </h3>
        <h3 className="number-label" id="four">
          4
        </h3>
      </div>
    </div>
  );
};

export { DrumSequencer };
