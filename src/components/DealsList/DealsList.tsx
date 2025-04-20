import "./index.css";

type Deal = {
  dealID: string;
  title: string;
  thumb: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
};

const DealsList = ({ deals }: { deals: Deal[] }) => {
  return (
    <ul className="deals-list">
      {deals.map((deal) => (
        <li key={deal.dealID} className="deal-card">
          <img className="deal-image" src={deal.thumb} alt={deal.title} />
          <div className="deal-info">
            <h3 className="deal-title">{deal.title}</h3>
            <p className="price-info">
              <strong className="deal-sale-price">€{deal.salePrice}</strong>{" "}
              <span className="deal-normal-price">€{deal.normalPrice}</span>{" "}
              <span className="discount">
                (-{Math.round(parseFloat(deal.savings))}%)
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DealsList;
