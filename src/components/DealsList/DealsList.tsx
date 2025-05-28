import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./index.css";

const DealsList = () => {
  const stores = useSelector((state: RootState) => state.stores.list);
  const deals = useSelector((state: RootState) => state.deals.deals);

  return (
    <ul className="deals-list">
      {deals.map((deal) => {
        const store = stores.find((s) => s.storeID === deal.storeID);
        return (
          <Link
            to={{
              pathname: `/game/${deal.dealID}`,
            }}
          >
            <li key={deal.dealID} className="deal-card">
              <img className="deal-image" src={deal.thumb} alt={deal.title} />
              <div className="deal-info">
                <h3 className="deal-title">{deal.title}</h3>
                <p className="price-info">
                  {store && (
                    <div className="store-info">
                      <img
                        className="store-icon"
                        src={`https://www.cheapshark.com${store.images.icon}`}
                        alt={store.storeName}
                      />
                      <span className="store-name">{store.storeName}</span>
                    </div>
                  )}
                  <strong className="deal-sale-price">€{deal.salePrice}</strong>{" "}
                  <span className="deal-normal-price">€{deal.normalPrice}</span>{" "}
                  <span className="discount">
                    (-{Math.round(parseFloat(deal.savings))}%)
                  </span>
                </p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default DealsList;
