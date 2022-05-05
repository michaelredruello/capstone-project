import "./Deals.css";
import React, { useState, useEffect } from "react";
import Select from "./Select";
import DealCard from "./DealCard";
import LoaderSpin from "../Loader";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("savings");

  useEffect(() => {
    getDeals();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDeals();
  }, [sortBy]);

  const handleSelectedFilter = (event) => {
    console.log(event.target.value);
    setSortBy(event.target.value);
  };

  const getDeals = async () => {
    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?pageSize=20&sortBy=${sortBy}`
      );
      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        setDeals(data);
      } else {
        console.log("Error fetching best deals");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deals-container container">
      <h2>Discover the bests deals</h2>
      <Select handleSelectedFilter={handleSelectedFilter} />
      <div className="deals-list-rows">
        {isLoading ? (
          <LoaderSpin />
        ) : (
          deals.map((deal, i) => <DealCard key={i} {...deal} />)
        )}
      </div>
    </div>
  );
};

export default Deals;
