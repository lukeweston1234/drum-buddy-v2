import React from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "../../styles/Profile.css";

const SequenceItem = ({ sequence }) => {
  const queryClient = useQueryClient();
  const deleteSequence = async () => {
    try {
      const URL = `${
        process.env.REACT_APP_API_URL + `/api/sequences/${sequence.sequence_id}`
      }`;
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const results = await axios.delete(URL, config);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation(deleteSequence, {
    onSuccess: () => {
      queryClient.invalidateQueries(["sequences"]);
    },
  });

  return (
    <div className="sequence-item">
      <Link className="sequence-link" to={`/sequence/${sequence.sequence_id}/`}>
        {sequence.sequence_name}
      </Link>
      <button
        className="delete-button"
        onClick={() => {
          mutation.mutate();
        }}
      >
        <img
          className="delete-image"
          src="/delete.svg"
          alt="Delete Sequence"
        ></img>
      </button>
    </div>
  );
};

export { SequenceItem };
