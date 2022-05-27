import "./FavList.css";
import FavGame from "./FavGame";
import logo from "../../imgs/logo-fav.svg";
import { useState } from "react";

const FavList = ({ removeNotif, removeFav, favGames }) => {
  const [favorite] = useState(favGames);

  return (
    <>
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-text">
              <h1>Follow your favourite games</h1>
              <p>
                Follow a game and be notified when the price of one of your
                favourite game drop !
              </p>
            </div>
          </div>
          <div className="banner-elem ">
            {favorite.length > 0 ? (
              <div className="fav-list">
                {favorite.map((game) => (
                  <FavGame
                    key={game.id}
                    removeFav={removeFav}
                    removeNotif={removeNotif}
                    {...game}
                  />
                ))}
              </div>
            ) : (
              <div className="img-container">
                <img className="banner-img" src={logo} alt="banner_img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavList;
