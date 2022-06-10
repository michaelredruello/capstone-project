import "./Deals.css";
import { useState, useEffect } from "react";
import Select from "./Select";
import DealCard from "./DealCard";
import LoaderSpin from "../Loader";

const Deals = (props) => {
  const [deal, setDeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("savings");

  useEffect(() => {
    getDeals();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDeals();
  });

  const getDeals = async () => {
    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?pageSize=20&sortBy=${sortBy}`
      );
      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        setDeal(data);
      } else {
        console.log("Error fetching best deals");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedFilter = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="deals-container container">
      <h2>Discover the best deals</h2>
      <Select handleSelectedFilter={handleSelectedFilter} />
      <div className="game-list-rows">
        {isLoading ? (
          <LoaderSpin />
        ) : (
          deal.map((deal, i) => (
            <DealCard
              key={i}
              favGames={props.favGames}
              addFav={props.addFav}
              removeFav={props.removeFav}
              {...deal}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Deals;
