import "./App.css";
import "react-notifications-component/dist/theme.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  addNotif,
  removedNotif,
  alreadyNotif,
  notLogNotif,
} from "./utils/notifications";
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
import Userlist from "./components/Users/Userlist";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [favGames, setFavGames] = useState([]);
  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(true);

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

    if (!login) {
      notLogNotif();
    } else {
      if (favGames.some((favGames) => favGames.title === title)) {
        alreadyNotif(title);
      } else {
        addNotif(title);
        setFavGames([gameInfos, ...favGames]);
      }
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
      <Navbar login={login} username={username} />
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Login/SignUp and user related feature are currently under maintenance!
        </Alert>
      </Collapse>
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
        <Route
          path="/login"
          element={
            <Login
              loginProfile={loginProfile}
              setUserID={setUserID}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Signup
              loginProfile={loginProfile}
              setUserID={setUserID}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/profile" element={<Profile userID={userID} />} />
        <Route path="/users" element={<Userlist userID={userID} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
