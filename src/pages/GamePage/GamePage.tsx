import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchGameInfo } from "../../store/gameSlice";
import { fetchSteamGame } from "../../store/steamSlice";
import "./index.css";

const GamePage = () => {
  const { gameID } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { game, loading, error } = useSelector(
    (state: RootState) => state.game
  );
  const { steamGame, loading: steamLoading } = useSelector(
    (state: RootState) => state.steam
  );
  const stores = useSelector((state: RootState) => state.stores.list);

  useEffect(() => {
    if (gameID) {
      dispatch(fetchGameInfo(gameID));
    }
  }, [gameID, dispatch]);

  useEffect(() => {
    if (game?.info?.steamAppID) {
      dispatch(fetchSteamGame(game.info.steamAppID));
    }
  }, [game?.info?.steamAppID, dispatch]);

  if (loading || steamLoading) {
    return (
      <div className="game-page">
        <div className="skeleton-thumb"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    );
  }

  if (error || !game) {
    return <div className="game-error">Game not found or failed to load.</div>;
  }

  const savingsThreshold = 0.01;

  return (
    <div className="game-page">
      <div className="game-page_left">
        <h1 className="game-title">{game.info.title}</h1>
        <img
          className="game-thumb"
          src={steamGame?.imgUrl || game.info.thumb}
          alt={game.info.title}
        />
      </div>

      <div className="game-page_right">
        <h2>Available Deals:</h2>
        <ul className="game-deals">
          {game.deals.map((deal) => {
            const store = stores.find((s) => s.storeID === deal.storeID);
            const savings = Number(deal.savings);

            return (
              <li key={deal.dealID} className="game-deal-card">
                {store && (
                  <div className="deal-store">
                    <img
                      className="store-icon"
                      src={`https://www.cheapshark.com${store.images.icon}`}
                      alt={store.storeName}
                    />
                    <span>{store.storeName}</span>
                  </div>
                )}
                <div className="deal-price-info">
                  <span className="deal-price">€{deal.price}</span>
                  {savings > savingsThreshold && (
                    <>
                      <span className="deal-retail">€{deal.retailPrice}</span>
                      <span className="deal-savings">
                        -{Math.round(savings)}%
                      </span>
                    </>
                  )}
                </div>
                <a
                  href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deal-link"
                >
                  Go to Store
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GamePage;
