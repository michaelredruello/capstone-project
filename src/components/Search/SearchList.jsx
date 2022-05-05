import React from "react";
import SearchResult from "./SearchResult";

const SearchList = ({ games }) => {
  return (
    <div className="direct-search-desult">
      {games.length > 0 ? (
        games.map((game) => <SearchResult key={game.gameID} {...game} />)
      ) : (
        <div className="no-result">No result</div>
      )}
    </div>
  );
};

export default SearchList;
