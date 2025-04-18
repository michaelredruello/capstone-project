import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

type GameSummary = {
  gameID: string;
  external: string;
  thumb: string;
  cheapest: string;
  price: string;
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<GameSummary[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchQuery.length > 2) {
        fetch(
          `https://www.cheapshark.com/api/1.0/games?title=${searchQuery}&limit=5`
        )
          .then((res) => res.json())
          .then((data) => setSearchResults(data))
          .catch((err) => console.error(err));
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        BestDeals
      </Link>

      <div className="navbar-search-container">
        <input
          type="text"
          placeholder="Search a game..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchResults.length > 0 && (
          <ul className="search-dropdown">
            {searchResults.map((game) => (
              <li key={game.gameID} className="dropdown-item">
                <img src={game.thumb} alt={game.external} />
                <div className="item-infos">
                  <div>{game.external}</div>
                  <div className="price-container">
                    <span className="price">€{game.cheapest}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
