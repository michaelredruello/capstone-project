import { useState } from "react";
import { useLocation } from "react-router-dom";
import GameCard from "./GameCard";
import SortedPrice from "./SortedPrice";

const GameList = (props) => {
  let location = useLocation();
  const [game, setGame] = useState(location.state.game);

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

  return (
    <div className="container result-container">
      <h2>Your search result</h2>
      <SortedPrice handleSorted={handleSorted} />
      <div className="game-list-rows">
        {game.map((game) => (
          <GameCard key={game.gameID} addFav={props.addFav} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
