import React from "react";

const SortedPrice = ({ handleSorted }) => {
  return (
    <div className="filter-selector">
      <p>Sort By:</p>
      <select onChange={handleSorted}>
        <option value="relevance">Pertinent</option>
        <option value="cheapest">Price</option>
      </select>
    </div>
  );
};
export default SortedPrice;
