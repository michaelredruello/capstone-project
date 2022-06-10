import "./FavList.css";
import FavGame from "./FavGame";
import logo from "../../imgs/logo-fav.svg";

const FavList = ({ removeNotif, removeFav, favGames }) => {
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
            {favGames.length > 0 ? (
              <div className="fav-list">
                {favGames.map((game) => (
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
