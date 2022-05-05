import React from "react";
import ShopDeal from "./ShopDeal";

const PriceList = ({ deals }) => {
  const dealsList = deals;
  return (
    <div className="price-list">
      <h2>Find the best deals</h2>
      {dealsList.map((deal) => (
        <ShopDeal key={deal.storeID} {...deal} />
      ))}
    </div>
  );
};

export default PriceList;
