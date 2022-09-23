import React from "react";
import { useQuery } from "@tanstack/react-query";
import { SequenceItem } from "./SequenceItem";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const { isLoading, isError, data, error } = useQuery(
    ["sequences"],
    getSequencesRefactor
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="profile-wrapper">
      {console.log(data)}
      <h3>Drum Sequences</h3>
      <ul className="sequence-container">
        {data.data.map((sequence, index) => {
          return <SequenceItem sequence={sequence} key={index} />;
        })}
      </ul>
    </div>
  );
};

const getSequencesRefactor = async () => {
  const userID = localStorage.getItem("userID");
  const URL = `${
    process.env.REACT_APP_API_URL + "/api/sequences/users/" + userID + "/"
  }`;
  const results = await axios.get(URL);
  console.log(results);
  return results;
};

export { Profile };

// useEffect(() => {
//   const getSequences = async () => {
//     try {
//       const userID = localStorage.getItem("userID");
//       const URL = `${
//         process.env.REACT_APP_API_URL + "/api/sequences/users/" + userID + "/"
//       }`;
//       console.log(URL);
//       const results = await axios.get(URL);
//       console.log(results);
//       if (results.status === 200) {
//         setCouldFetch(true);
//         setSequences(results.data);
//         return;
//       }
//       setCouldFetch(false);
//     } catch (error) {
//       setCouldFetch(false);
//       console.log(error);
//     }
//   };
//   getSequences();
// }, []);

// if (!couldFetch) {
//   return <h2>Could Not Find Account</h2>;
// }
