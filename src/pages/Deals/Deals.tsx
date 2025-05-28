import { useEffect, useState } from "react";
import DealsList from "../../components/DealsList/DealsList";
import Pagination from "../../components/Pagination/Pagination";
import SortSelector from "../../components/SortSelector/SortSelector";
import Loader from "../../components/Loader/Loader";
import "./index.css";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState("savings");
  const [isLoading, setIsLoading] = useState(true);
  const [stores, setStores] = useState<
    {
      storeID: string;
      storeName: string;
      images: { banner: string; icon: string };
    }[]
  >([]);

  // fetch discounted games list
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&pageSize=20&pageNumber=${page}`
        );
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.error("Failed to fetch deals", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeals();
  }, [page, sortBy]);

  // fetch stores from game offers
  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((res) => res.json())
      .then((data) => setStores(data))
      .catch((err) => console.error("Failed to fetch stores", err));
  }, []);

  return (
    <div className="deals-container">
      <h1 className="deals-title">Deals of the day</h1>
      <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DealsList />
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default Deals;
