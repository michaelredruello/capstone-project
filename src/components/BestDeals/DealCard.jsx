import axios from "axios";
import StoreInfos from "./StoreInfos";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
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
  favGames,
  addFav,
  removeFav,
}) => {
  const [game, setGame] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getGame(gameID);
    if (favGames.some((favGames) => favGames.title === title)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
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
      <div className="add-btn">
        {favorite ? (
          <AiFillStar
            onClick={() => {
              removeFav(gameID, title);
              setFavorite(false);
            }}
          />
        ) : (
          <AiOutlineStar
            onClick={() => {
              addFav(gameID, title, salePrice, game);
              setFavorite(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DealCard;
