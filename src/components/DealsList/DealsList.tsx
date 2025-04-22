import "./index.css";

type Deal = {
  dealID: string;
  title: string;
  thumb: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  storeID: string;
};

type Store = {
  storeID: string;
  storeName: string;
  images: {
    banner: string;
    icon: string;
  };
};

const DealsList = ({ deals, stores }: { deals: Deal[]; stores: Store[] }) => {
  return (
    <ul className="deals-list">
      {deals.map((deal) => {
        const store = stores.find((s) => s.storeID === deal.storeID);
        return (
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
        );
      })}
    </ul>
  );
};

export default DealsList;
