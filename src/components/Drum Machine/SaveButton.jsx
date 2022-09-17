import React from "react";
import "../../styles/Controls.css";

const SaveButton = ({ drumArray }) => {
  return (
    <button className="save-button">
      <img alt="Save Button" src="/save.svg" />
    </button>
  );
};

export { SaveButton };
