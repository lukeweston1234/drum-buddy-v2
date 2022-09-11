import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const useAudio = (fileName) => {
  const [audio, setAudio] = useState(() => {
    let sound = new Howl({
      src: [fileName],
    });
    return sound;
  });
  useEffect(() => {
    const sound = new Howl({
      src: [fileName],
    });
    setAudio(sound);
  }, [fileName]);
  return [audio, setAudio];
};

export { useAudio };
