import axios from "axios";
import StoreInfos from "./StoreInfos";
import { MdAddAlert } from "react-icons/md";
import { useState, useEffect } from "react";

const DealCard = ({
  gameID,
  title,
  salePrice,
  dealID,
  savings,
  storeID,
  normalPrice,
  thumb,
  addFav,
}) => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    getGame(gameID);
    // eslint-disable-next-line
  }, []);

  const getGame = (gameId) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`)
      .then((res) => res.data)
      .then((data) => {
        setGame(data);
      });
  };

  return (
    <div className="gamecard-row">
      <a
        className="game-card"
        href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
      >
        <span
          className="card-thumb"
          style={{ backgroundImage: `url(${thumb})` }}
        ></span>
        <div className="game-info-container">
          <div className="game-info">
            <p>{title}</p>
            <StoreInfos storeID={storeID} />
          </div>
          <div className="game-price-card">
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
      <div
        className="add-btn"
        onClick={() => addFav(gameID, title, salePrice, game)}
      >
        <MdAddAlert />
      </div>
    </div>
  );
};

export default DealCard;
