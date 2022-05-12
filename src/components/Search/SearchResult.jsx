import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
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

  useEffect(() => {
    getGame(props.gameID);
    // eslint-disable-next-line
  }, []);

  const getGame = (gameID) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
      .then((response) => response.data)
      .then((data) => {
        setGame(data);
      });
  };

  return (
    <Link
      to={{
        pathname: `/game/${props.gameID}`,
      }}
      state={{ game: game }}
    >
      <span
        className="card-thumb"
        style={{ backgroundImage: `url(${props.thumb})` }}
      ></span>
      <div className="result-card-info">
        <h3>{game.info.title}</h3>
        <p>{game.deals[0].price} $</p>
      </div>
    </Link>
  );
};

export default SearchResult;
