import "./Search.css";
import axios from "axios";
import SearchList from "./SearchList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const [games, setGames] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();

  const getGames = (input) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=15`)
      .then((response) => response.data)
      .then((data) => {
        setGames(data);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { games: games } });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    if (value.length > 0) {
      setIsFocus(true);
      getGames(value);
    } else {
      setIsFocus(false);
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 150);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Look for a game"
          autoComplete="off"
          id="main-search"
          name="search"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>

      {isFocus && <SearchList games={games.slice(0, 5)} />}
    </div>
  );
};

export default Search;
