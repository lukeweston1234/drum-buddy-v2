import "../../styles/Controls.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SaveButton = ({ drumArray }) => {
  const { isAuth } = useContext(AuthContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [postId, setPostId] = useState(null);
  const saveHandler = async () => {
    try {
      if (!isAuth) {
        setShouldRedirect(true);
        return;
      }
      const sequenceName = prompt("Enter your sequence name");
      const body = { sequence: drumArray, sequenceName: sequenceName };
      const URL = `${process.env.REACT_APP_API_URL + "/api/sequences"}`;
      const token = localStorage.getItem("userToken");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const results = await axios.post(URL, body, config);
      console.log(results);
      if (results.status === 201) {
        setShouldRedirect(true);
        setPostId(results.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (shouldRedirect) {
    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    return <Navigate to={`/sequence/${postId}`} />;
  }

  return (
    <button onClick={saveHandler} className="save-button">
      <img alt="Save Button" src="/save.svg" />
    </button>
  );
};

export { SaveButton };
