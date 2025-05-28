import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./index.css";

type Deal = {
  dealID: string;
  storeID: string;
  price: string;
  retailPrice: string;
  savings: string;
};

type GameInfo = {
  info: {
    title: string;
    thumb: string;
  };
  deals: Deal[];
};

const GamePage = () => {
  const { gameID } = useParams();
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
        );
        const data = await response.json();
        setGameInfo(data);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (gameID) fetchGame();
  }, [gameID]);

  const stores = useSelector((state: RootState) => state.stores.list);

  if (loading) {
    return (
      <div className="game-page">
        <div className="skeleton-thumb"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    );
  }

  if (!gameInfo) return <div className="game-error">Game not found.</div>;

  return (
    <div className="game-page">
      <h1 className="game-title">{gameInfo.info.title}</h1>
      <img
        className="game-thumb"
        src={gameInfo.info.thumb}
        alt={gameInfo.info.title}
      />

      <h2>Available Deals:</h2>
      <ul className="game-deals">
        {gameInfo.deals.map((deal) => {
          const store = stores.find((s) => s.storeID === deal.storeID);
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
                <span className="deal-retail">€{deal.retailPrice}</span>
                <span className="deal-savings">
                  (-{Math.round(Number(deal.savings))}%)
                </span>
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
  );
};

export default GamePage;
