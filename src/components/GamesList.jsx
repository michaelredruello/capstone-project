import { useState } from "react";
import { useLocation } from "react-router";
import GameCard from "./GameCard";
import SortedPrice from "./SortedPrice";

const GameList = (props) => {
  let location = useLocation();
  const [games, setGames] = useState(location.state.games);

  const handleSorted = (event) => {
    const value = event.target.value;
    const byPrice = (a, b) => a.cheapest - b.cheapest;
    if (value === "cheapest") {
      const filteredPrice = [...games].sort(byPrice);
      setGames(filteredPrice);
    } else {
      setGames(location.state);
    }
  };

  return (
    <div className="container result-container">
      <h2>Your search result</h2>
      <SortedPrice handleSorted={handleSorted} />
      <div className="game-list-rows">
        {games.map((game) => (
          <GameCard key={game.gameID} addFav={props.addFav} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
