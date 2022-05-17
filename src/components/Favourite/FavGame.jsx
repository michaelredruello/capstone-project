import React from "react";
import { Link } from "react-router-dom";
import { RemoveBtn, SeenBtn } from "./statusBtn";

const FavGame = ({
  id,
  title,
  price,
  game,
  newPrice,
  change,
  removeFav,
  removeNotif,
}) => {
  const thumb = game.info.thumb;
  const saving = Math.round(
    100 - 100 * (parseFloat(newPrice) / parseFloat(price))
  );
  return (
    <div className="fav-row">
      <Link
        className="fav-card"
        to={{
          pathname: `/game/${id}`,
          state: { game: game },
        }}
      >
        <span
          className="fav-thumb"
          style={{ backgroundImage: `url(${thumb})` }}
        ></span>
        <div className="game-info-container">
          <div className="game-info">
            <p>{title}</p>
          </div>
          <div className="game-price-card">
            <div className="game-savings">
              {saving > 0 && <p>-{saving} %</p>}
            </div>
          </div>
        </div>
      </Link>

      {change ? (
        <SeenBtn removeNotif={removeNotif} id={id} />
      ) : (
        <RemoveBtn removeFav={removeFav} id={id} title={title} />
      )}
    </div>
  );
};

export default FavGame;
