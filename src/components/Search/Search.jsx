import "./Search.css";
import axios from "axios";
import SearchList from "./SearchList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const [game, setGame] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();

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
    if (value.length > 0) {
      setIsFocus(true);
      getGame(value);
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Look for a game"
          id="main-search"
          name="search"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </form>
      {isFocus && <SearchList games={game.slice(0, 5)} />}
    </div>
  );
};

export default Search;
