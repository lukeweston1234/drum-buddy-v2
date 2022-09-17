import React, { useEffect, useRef } from "react";
import "../../styles/Controls.css";

const PlayButton = ({
  kick,
  snare,
  hat,
  tom,
  stick,
  glitch,
  drumArray,
  drumIndex,
  isPlaying,
  setIsPlaying,
  setPlayingSequencerButton,
  bpm,
}) => {
  const interval = useRef(null);

  useEffect(() => {
    console.log(drumArray);
    const playSound = () => {
      if (drumArray[drumIndex.current].kick) {
        kick.play();
      }
      if (drumArray[drumIndex.current].snare) {
        snare.play();
      }
      if (drumArray[drumIndex.current].hat) {
        hat.play();
      }
      if (drumArray[drumIndex.current].tom) {
        tom.play();
      }
      if (drumArray[drumIndex.current].stick) {
        stick.play();
      }
      if (drumArray[drumIndex.current].glitch) {
        glitch.play();
      }
    };
    if (isPlaying) {
      interval.current = setInterval(() => {
        console.log("Drum Index", drumIndex.current);
        setPlayingSequencerButton(drumIndex.current);
        playSound();
        if (drumIndex.current === drumArray.length - 1) {
          drumIndex.current = 0;
        } else {
          drumIndex.current += 1;
        }
      }, 60000 / (bpm * 4));
    } else {
      clearInterval(interval);
      interval.current = null;
    }
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isPlaying,
    setPlayingSequencerButton,
    drumArray,
    hat,
    kick,
    glitch,
    stick,
    snare,
    tom,
    bpm,
  ]);

  return (
    <button
      className="play-button"
      onClick={() => {
        setIsPlaying((isPlaying) => {
          return !isPlaying;
        });
      }}
    >
      <img
        className="play-image"
        src={isPlaying ? "/pause.svg" : "/play.svg"}
        alt="play/pause button"
      />
    </button>
  );
};

export { PlayButton };
