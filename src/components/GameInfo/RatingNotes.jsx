import React from "react";
import DealRating from "./DealRating";
import Note from "./Note";

const RatingNotes = ({ dealID }) => {
  return (
    <div className="note-boxes">
      <DealRating dealID={dealID} />
      <Note dealID={dealID} />
    </div>
  );
};

export default RatingNotes;
