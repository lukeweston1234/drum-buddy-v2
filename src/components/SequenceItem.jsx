import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

const SequenceItem = ({ sequence }) => {
  return (
    <div className="sequence-item">
      <Link className="sequence-link" to={`/sequence/${sequence.sequence_id}/`}>
        {sequence.sequence_name}
      </Link>
    </div>
  );
};

export { SequenceItem };
