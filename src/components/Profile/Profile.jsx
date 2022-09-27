import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthContext";
import { SequenceItem } from "./SequenceItem";
import axios from "axios";
import "../../styles/Profile.css";

const Profile = () => {
  const { isAuth } = useContext(AuthContext);
  const { isLoading, isError, data, error } = useQuery(
    ["sequences"],
    getSequencesRefactor
  );

  if (isLoading) {
    return (
      <div className="loading-wrapper">
        <div className="animation-wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/Home" />;
  }

  if (isError) {
    console.log(error);
    return <span className="error-message">Could not connect to server.</span>;
  }

  return (
    <div className="profile-wrapper">
      {console.log(data)}
      <h3>My Loops</h3>
      <hr />
      <ul className="sequence-container">
        {data.data.map((sequence, index) => {
          return (
            <>
              <SequenceItem sequence={sequence} key={index} /> <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
};

const getSequencesRefactor = async () => {
  try {
    const userID = localStorage.getItem("userID");
    const URL = `${
      process.env.REACT_APP_API_URL + "/api/sequences/users/" + userID + "/"
    }`;
    const results = await axios.get(URL);
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
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
