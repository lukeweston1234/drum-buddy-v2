import React from "react";
//import { useQuery } from "react-query";
import "../styles/Controls.css";

const SaveButton = () => {
  return (
    <button className="save-button">
      <img alt="Save Button" src="/save.svg" />
    </button>
  );
};

export { SaveButton };
