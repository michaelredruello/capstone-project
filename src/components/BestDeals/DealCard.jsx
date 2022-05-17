import React from "react";
import StoreInfos from "./StoreInfos";

const DealCard = ({
  gameID,
  thumb,
  title,
  salePrice,
  dealID,
  savings,
  storeID,
  normalPrice,
}) => {
  const thumbnail = { backgroundImage: `url(${thumb})` };
  return (
    <a
      className="deal-card"
      href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
    >
      <span className="card-thumb" style={thumbnail}></span>
      <div className="game-info-container">
        <div className="game-info">
          <p>{title}</p>
          <StoreInfos storeID={storeID} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "justify-content",
            flexDirection: "row",
          }}
        >
          <div className="game-savings">
            {savings > 0 && <p>-{Math.round(savings)}%</p>}
          </div>
          <div className="game-price">
            <p>{salePrice > 0 ? salePrice + " $" : "free"}</p>
            {savings > 0 && <p>{normalPrice} $</p>}
          </div>
        </div>
      </div>
    </a>
  );
};

export default DealCard;
