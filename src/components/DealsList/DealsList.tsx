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
          <li key={deal.dealID}>
            <a
              className="deal-card"
              href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
              target="_blank"
            >
              <img className="deal-image" src={deal.thumb} alt={deal.title} />
              <div className="deal-info">
                <h3 className="deal-title">{deal.title}</h3>

                {store && (
                  <div className="store-info">
                    <img
                      className="store-icon-list"
                      src={`https://www.cheapshark.com${store.images.icon}`}
                      alt={store.storeName}
                    />
                    <span className="store-name">{store.storeName}</span>
                  </div>
                )}

                <p className="price-info">
                  <strong className="deal-sale-price">€{deal.salePrice}</strong>{" "}
                  <span className="deal-normal-price">€{deal.normalPrice}</span>{" "}
                  <span className="discount">
                    (-{Math.round(parseFloat(deal.savings))}%)
                  </span>
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DealsList;
