import "./App.css";
import "react-notifications-component/dist/theme.css";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useMatch,
} from "react-router-dom";
import { setStorage, getStorage, checkChanges } from "./utils/storage";
import { addNotif, removedNotif } from "./utils/notifications";

import Home from "./components/Home";
import GameList from "./components/GamesList";
import GameInfo from "./components/GameInfo/GameInfo";
import Navbar from "./components/Navbar";
import Deals from "./components/BestDeals/Deals";
import FavList from "./components/Favourite/FavList";
import ReactNotification from "react-notifications-component";

const App = () => {
  const [favGames, setFavGames] = useState([]);
  const [asChange, setAsChange] = useState(false);

  useEffect(() => {
    mountFunction();
  }, []);

  useEffect(() => {
    setStorage(favGames);
  });

  const mountFunction = async () => {
    const storedFavGames = getStorage();
    const checkedList = await checkChanges(storedFavGames);
    const asChange = checkedList.some((game) => game.change === true);

    setFavGames(checkedList);
    setAsChange(asChange);
  };

  const addFav = (id, title, price, game) => {
    const gameInfos = {
      id: id,
      title: title,
      price: price,
      newPrice: null,
      change: false,
      game: game,
    };

    addNotif(title);

    favGames.push(gameInfos);
    setFavGames(favGames);
  };

  const removeFav = (id, title) => {
    const removed = favGames.filter((game) => game.id === id);
    const index = favGames.indexOf(removed[0]);
    favGames.splice(index, 1);

    setFavGames(favGames);

    removedNotif(title);
  };

  const removeNotif = (id) => {
    const changed = favGames.map((game) => {
      if (game.id === id && game.newPrice !== null) {
        return {
          ...game,
          change: false,
          price: game.newPrice,
          newPrice: null,
        };
      } else {
        return game;
      }
    });

    setFavGames(changed);
    setAsChange(false);
  };

  return (
    <BrowserRouter>
      <ReactNotification />
      <Navbar asChange={asChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<GameList addFav={addFav} location={useLocation} />}
        />
        <Route
          path="/game/:gameID"
          element={
            <GameInfo addFav={addFav} location={useLocation} match={useMatch} />
          }
        />
        <Route path="/deals" element={<Deals />} />
        <Route
          path="/favorite"
          element={
            <FavList
              favGames={favGames}
              removeFav={removeFav}
              removeNotif={removeNotif}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
