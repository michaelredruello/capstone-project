import "./GameCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";

const GameCard = (props) => {
  const [game, setGame] = useState({
    info: {
      title: "",
    },
    deals: {
      0: {
        price: "",
      },
    },
  });
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getGame(props.gameID);
    if (props.favGames.some((favGames) => favGames.title === game.info.title)) {
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
      <Link
        className="game-card"
        to={{
          pathname: `/game/${props.gameID}`,
        }}
        state={{ game: game }}
      >
        <span
          className="card-thumb"
          style={{ backgroundImage: `url(${props.thumb})` }}
        ></span>
        <div className="game-info-container">
          <div className="game-info">
            <p>{game.info.title}</p>
          </div>
          <div className="game-price-card">
            <div className="game-savings">
              {game.deals[0].savings > 0 ? (
                <p>-{Math.round(game.deals[0].savings)}%</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <p>Best deal</p>
              <p>{game.deals[0].price} $</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="add-btn">
        {favorite ? (
          <AiFillStar
            onClick={() => {
              props.removeFav(props.gameID, game.info.title);
              setFavorite(false);
            }}
          />
        ) : (
          <AiOutlineStar
            onClick={() => {
              props.addFav(
                props.gameID,
                game.info.title,
                game.deals[0].price,
                game
              );
              setFavorite(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GameCard;
