import React, { Component } from "react";
import PriceList from "./PricesList/PriceList";
import RatingNotes from "./RatingNotes";
import "./GameInfo.css";

class GameInfo extends Component {
  render() {
    const { deals, thumb } = this.props.location.state.game;
    const { title } = this.props.location.state.game.info;
    const { addFav } = this.props;
    const { dealID, price } = deals[0];
    const { gameID } = this.props.match.params;
    const { game } = this.props.location.state;

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
                  onClick={() => addFav(gameID, title, price, game)}
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
  }
}

export default GameInfo;
