import React from "react";

const option = {
  color: "#1a237e",
};

const Select = ({ handleSelectedFilter }) => {
  return (
    <div className="filter-selector">
      <select onChange={handleSelectedFilter}>
        <option style={option} value="Savings">
          Savings
        </option>
        <option style={option} value="Price">
          Price
        </option>
        <option style={option} value="recent">
          New deals
        </option>
        <option style={option} value="Metacritic">
          Rating
        </option>
      </select>
    </div>
  );
};
export default Select;
