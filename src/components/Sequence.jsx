import React, { useState, useEffect } from "react";
import axios from "axios";
import { DrumMachine } from "./Drum Machine/DrumMachine";
import { useParams } from "react-router-dom";

const Sequence = () => {
  const [parentDrumArray, setParentDrumArray] = useState({});
  const [hasFetched, setHasFetched] = useState(false);
  const { sequenceId } = useParams();
  useEffect(() => {
    const getSequenceById = async () => {
      const URL = `${
        process.env.REACT_APP_API_URL + "/api/sequences/" + sequenceId
      }`;
      const results = await axios.get(URL);
      console.log(results);
      if (results) {
        setHasFetched(true);
      }
      setParentDrumArray(results.data.json_sequence);
    };
    getSequenceById();
  }, [sequenceId, setParentDrumArray, setHasFetched]);
  if (hasFetched) {
    return <DrumMachine parentDrumArray={parentDrumArray} />;
  }
};

export { Sequence };
