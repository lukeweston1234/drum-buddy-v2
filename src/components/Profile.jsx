import React, { useState, useEffect } from "react";
import { SequenceItem } from "./SequenceItem";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [sequences, setSequences] = useState([]);
  const [couldFetch, setCouldFetch] = useState(false);

  useEffect(() => {
    const getSequences = async () => {
      try {
        const userID = localStorage.getItem("userID");
        const URL = `${
          process.env.REACT_APP_API_URL + "/api/sequences/users/" + userID + "/"
        }`;
        console.log(URL);
        const results = await axios.get(URL);
        console.log(results);
        if (results.status === 200) {
          setCouldFetch(true);
          setSequences(results.data);
          return;
        }
        setCouldFetch(false);
      } catch (error) {
        setCouldFetch(false);
        console.log(error);
      }
    };
    getSequences();
  }, []);

  if (!couldFetch) {
    return <h2>Could Not Find Account</h2>;
  }

  return (
    <div className="profile-wrapper">
      <h2>Drum Sequences</h2>
      <ul className="sequence-container">
        {sequences.map((sequence, index) => {
          return <SequenceItem sequence={sequence} key={index} />;
        })}
      </ul>
    </div>
  );
};
export { Profile };
