import React, { useState, useRef } from "react";
import { useAudio } from "./useAudio";
import "../styles/DrumMachine.css";
import { DrumButton } from "./DrumButton";
import { DrumSequencer } from "./DrumSequencer";
import { PlayButton } from "./PlayButton";
import { ResetButton } from "./ResetButton";
import { BPM } from "./BPM";
import { StopButton } from "../components/StopButton";

const DrumMachine = () => {
  const [activeButton, setActiveButton] = useState();
  const [bpm, setBPM] = useState(120);
  const [playingSequencerButton, setPlayingSequencerButton] = useState(0);
  const drumIndex = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [kick] = useAudio("kick.mp3");
  const [snare] = useAudio("snare.mp3");
  const [hat] = useAudio("hat.mp3");
  const [tom] = useAudio("tom.mp3");
  const [stick] = useAudio("stick.mp3");
  const [glitch] = useAudio("glitch.mp3");
  const [drumArray, setDrumArray] = useState(() => {
    const soundPlayer = {
      kick: false,
      snare: false,
      hat: false,
      tom: false,
      stick: false,
      glitch: false,
    };

    const dataArray = [];
    for (let i = 0; i < 16; i++) {
      dataArray[i] = structuredClone(soundPlayer);
    }
    return dataArray;
  });
  return (
    <div className="wrapper">
      <div className="drum-machine">
        <div className="drum-button-container">
          <DrumButton
            audio={kick}
            name="kick"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DrumButton
            audio={snare}
            name="snare"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DrumButton
            audio={hat}
            name="hat"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DrumButton
            audio={tom}
            name="tom"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DrumButton
            audio={stick}
            name="stick"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
          <DrumButton
            audio={glitch}
            name="glitch"
            setActiveButton={setActiveButton}
            activeButton={activeButton}
          />
        </div>
        <div className="control-wrapper">
          <BPM bpm={bpm} setBPM={setBPM} />
          <div className="controls">
            <PlayButton
              kick={kick}
              snare={snare}
              hat={hat}
              tom={tom}
              stick={stick}
              glitch={glitch}
              drumArray={drumArray}
              setPlayingSequencerButton={setPlayingSequencerButton}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              drumIndex={drumIndex}
              bpm={bpm}
            />
            <StopButton
              drumIndex={drumIndex}
              setIsPlaying={setIsPlaying}
              setPlayingSequencerButton={setPlayingSequencerButton}
            />
            <ResetButton setDrumArray={setDrumArray} />
          </div>
        </div>
        <DrumSequencer
          activeButton={activeButton}
          drumArray={drumArray}
          setDrumArray={setDrumArray}
          playingSequencerButton={playingSequencerButton}
        />
      </div>
    </div>
  );
};
export { DrumMachine };
