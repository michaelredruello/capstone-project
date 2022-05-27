import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GameCard from "./GameCard";
import SortedPrice from "./SortedPrice";

const GameList = (props) => {
  let location = useLocation();
  const [game, setGame] = useState(location.state.game);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSorted = (event) => {
    const value = event.target.value;
    const byPrice = (a, b) => a.cheapest - b.cheapest;
    if (value === "cheapest") {
      const filteredPrice = [...game].sort(byPrice);
      setGame(filteredPrice);
    } else {
      setGame(location.state);
    }
  };

  const getGame = (input) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=15`)
      .then((response) => response.data)
      .then((data) => {
        setGame(data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/search", { state: { game: game } });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    getGame(value);
  };

  return (
    <div className="container result-container">
      <form onSubmit={handleSubmit} className="game-search-form">
        <input
          type="search"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
      </form>
      <SortedPrice handleSorted={handleSorted} />
      <div className="game-list-rows">
        {game.map((game) => (
          <GameCard
            key={game.gameID}
            favGames={props.favGames}
            addFav={props.addFav}
            removeFav={props.removeFav}
            {...game}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;
