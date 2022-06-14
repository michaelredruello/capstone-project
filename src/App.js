import "./App.css";
import "react-notifications-component/dist/theme.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { addNotif, removedNotif, alreadyNotif } from "./utils/notifications";
import { ReactNotifications } from "react-notifications-component";

import Home from "./components/Home";
import GameList from "./components/GamesList";
import GameInfo from "./components/GameInfo/GameInfo";
import Navbar from "./components/Navbar";
import Deals from "./components/BestDeals/Deals";
import FavList from "./components/Favourite/FavList";
import Login from "./components/Profile/Login";
import Signup from "./components/Profile/SignUp";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [favGames, setFavGames] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favGames"));
    if (favorites) {
      setFavGames(favorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favGames", JSON.stringify(favGames));
  }, [favGames]);

  const addFav = (id, title, price, game) => {
    const gameInfos = {
      id: id,
      title: title,
      price: price,
      newPrice: null,
      change: false,
      game: game,
    };

    if (favGames.some((favGames) => favGames.title === title)) {
      alreadyNotif(title);
    } else {
      addNotif(title);
      setFavGames([gameInfos, ...favGames]);
    }
  };

  const removeFav = (id, title) => {
    const removed = favGames.filter((game) => game.id !== id);
    removedNotif(title);
    setFavGames([...removed]);
  };

  const loginProfile = () => {
    setLogin(true);
  };

  return (
    <BrowserRouter>
      <ReactNotifications />
      <Navbar login={login} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <GameList
              favGames={favGames}
              addFav={addFav}
              removeFav={removeFav}
            />
          }
        />
        <Route
          path="/game/:gameID"
          element={
            <GameInfo
              favGames={favGames}
              addFav={addFav}
              removeFav={removeFav}
            />
          }
        />
        <Route
          path="/deals"
          element={
            <Deals favGames={favGames} addFav={addFav} removeFav={removeFav} />
          }
        />
        <Route
          path="/favorite"
          element={<FavList favGames={favGames} removeFav={removeFav} />}
        />
        <Route path="/login" element={<Login loginProfile={loginProfile} />} />
        <Route
          path="/register"
          element={<Signup loginProfile={loginProfile} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
