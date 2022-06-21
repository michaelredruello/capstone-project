import "./GameInfo.css";
import axios from "axios";
import Note from "./Note";
import DealRating from "./DealRating";
import PriceList from "./PricesList/PriceList";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const GameInfo = (props) => {
  const [steamData, setSteamData] = useState([]);
  const [steamReviews, setSteamReviews] = useState([]);
  const [favorite, setFavorite] = useState(false);

  let location = useLocation();

  const game = location.state.game;
  const deals = location.state.game.deals;
  const title = location.state.game.info.title;
  const dealID = location.state.game.deals[0].dealID;
  const price = location.state.game.deals[0].price;
  const steamAppID = location.state.game.info.steamAppID;
  const gameID = useParams();

  const API_KEY = process.env.REACT_APP_STEAM_API_KEY;
  console.log(process.env.REACT_APP_STEAM_API_KEY;);

  useEffect(() => {
    getSteamData();
    getSteamReviews();
    if (props.favGames.some((favGames) => favGames.title === title)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
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

  const getSteamReviews = () => {
    axios
      .get(
        `https://steam2.p.rapidapi.com/appReviews/${steamAppID}/limit/40/*`,
        {
          headers: config,
        }
      )
      .then((res) => res.data)
      .then((data) => {
        setSteamReviews(data.reviews);
      });
  };

  return (
    <div className="container">
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-info">
              <h1>{title}</h1>
              <img src={steamData.imgUrl} alt="game-banner img" />
              <p>{steamData.description}</p>
              <div className="note-boxes">
                <DealRating dealID={dealID} />
                <Note dealID={dealID} />
                {favorite ? (
                  <FaHeart
                    className="fav-btn"
                    style={{ width: "30px", height: "30px", marginTop: "35px" }}
                    onClick={() => {
                      props.removeFav(gameID, title);
                      setFavorite(false);
                    }}
                  />
                ) : (
                  <FaRegHeart
                    className="fav-btn"
                    style={{ width: "30px", height: "30px", marginTop: "35px" }}
                    onClick={() => {
                      props.addFav(gameID, title, price, game);
                      setFavorite(true);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="banner-elem img-container">
            <PriceList deals={deals} />
          </div>
        </div>
        <div>
          {steamReviews.map((review) => (
            <Box
              sx={{
                width: 500,
                height: 300,
                marginTop: 5,
                backgroundColor: "white",
              }}
            >
              <CardContent>
                <Typography
                  variant="caption"
                  component="div"
                  color="text.primary"
                >
                  User id: {review.author.steamid}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Playtime: {review.author.playtime_forever}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {review.review}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameInfo;
