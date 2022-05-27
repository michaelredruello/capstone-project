import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";

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
        }}
        state={{ game: game }}
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
        <div className="seen-btn" onClick={() => removeNotif(id)}>
          <GoIssueClosed />
        </div>
      ) : (
        <div className="remove-btn" onClick={() => removeFav(id, title)}>
          <MdClose />
        </div>
      )}
    </div>
  );
};

export default FavGame;
