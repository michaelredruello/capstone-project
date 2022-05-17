import "./GameInfo.css";
import axios from "axios";
import PriceList from "./PricesList/PriceList";
import RatingNotes from "./RatingNotes";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const GameInfo = (props) => {
  const [steamData, setSteamData] = useState([]);

  let location = useLocation();

  const game = location.state.game;
  const deals = location.state.game.deals;
  const title = location.state.game.info.title;
  const dealID = location.state.game.deals[0].dealID;
  const price = location.state.game.deals[0].price;
  const steamAppID = location.state.game.info.steamAppID;
  const gameID = useParams();

  const API_KEY = process.env.REACT_APP_STEAM_API_KEY;

  useEffect(() => {
    getSteamData();
    // eslint-disable-next-line
  }, []);

  const config = {
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  };

  const getSteamData = () => {
    axios
      .get(`https://steam2.p.rapidapi.com/appDetail/${steamAppID}`, {
        headers: config,
      })
      .then((res) => res.data)
      .then((data) => {
        setSteamData(data);
      });
  };

  console.log(steamData);

  return (
    <div className="container">
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-info">
              <h1>{title}</h1>
              <p>
                <img src={steamData.imgUrl} alt="game-banner img" />
              </p>
              <p>{steamData.description}</p>
              <RatingNotes dealID={dealID} />
              <button
                className="fav-btn"
                onClick={() => props.addFav(gameID, title, price, game)}
              >
                Follow this game
              </button>
            </div>
          </div>
          <div className="banner-elem img-container">
            <PriceList deals={deals} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameInfo;
