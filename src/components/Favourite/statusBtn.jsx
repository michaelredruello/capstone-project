import React from "react";
import { MdClose } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";

export const SeenBtn = ({ removeNotif, id }) => {
  return (
    <div className="seen-btn" onClick={() => removeNotif(id)}>
      <GoIssueClosed />
    </div>
  );
};

export const RemoveBtn = ({ removeFav, id, title }) => {
  return (
    <div className="remove-btn" onClick={() => removeFav(id, title)}>
      <MdClose />
    </div>
  );
};
