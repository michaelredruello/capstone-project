import { useState } from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";
import PriceList from "./PricesList/PriceList";
import RatingNotes from "./RatingNotes";
import "./GameInfo.css";

const GameInfo = (props) => {
  let location = useLocation();
  let params = useParams();

  // const { deals, thumb } = props.location.state.game;
  // const { title } = this.props.location.state.game.info;
  // const { addFav } = this.props;
  // const { dealID, price } = deals[0];
  // const { game } = this.props.location.state;
  // const { gameID } = this.props.match.params;

  const [game] = useState(location.state.game);
  const [deals] = useState(location.state.game.deals);
  const [title] = useState(location.state.game.info.title);
  const [dealID] = useState(location.state.game.deals[0].dealID);
  const [price] = useState(location.state.game.deals[0].price);
  const [gameID] = useState();

  return (
    <div className="container">
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-info">
              <h1>{title}</h1>
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
