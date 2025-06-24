import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  setQuery,
  clearResults,
  fetchSearchResults,
} from "../../store/searchSlice";
import "./index.css";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { query, results } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 2) {
        dispatch(fetchSearchResults(query));
      } else {
        dispatch(clearResults());
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, dispatch]);

  // Unfocus Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dispatch(clearResults());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  const handleSelectGame = (gameID: string) => {
    dispatch(setQuery(""));
    dispatch(clearResults());
    navigate(`/game/${gameID}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="hamburger_menu"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className="navbar-links">
          <Link to="/" className="navbar-logo">
            Home
          </Link>
          <Link to="/deals" className="navbar-logo">
            BestDeals
          </Link>
        </div>
      </div>

      <div className="navbar-search-container" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search a game..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        {results.length > 0 && (
          <ul className="search-dropdown">
            {results.map((game) => (
              <li
                key={game.gameID}
                className="dropdown-item"
                onClick={() => handleSelectGame(game.gameID)}
              >
                <img src={game.thumb} alt={game.external} />
                <div className="dropdown-item-infos">
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

      {sidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            ☰
          </button>
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link to="/deals" onClick={() => setSidebarOpen(false)}>
            BestDeals
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
