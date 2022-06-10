import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

const FavGame = ({ id, title, game, removeFav }) => {
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
          style={{ backgroundImage: `url(${game.info.thumb})` }}
        ></span>
        <div className="game-info-container">
          <div className="game-info">
            <p>{title}</p>
          </div>
        </div>
      </Link>
      <div className="remove-btn" onClick={() => removeFav(id, title)}>
        <MdClose />
      </div>
    </div>
  );
};

export default FavGame;
