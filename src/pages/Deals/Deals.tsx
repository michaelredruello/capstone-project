import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals, setPage, setSortBy } from "../../store/dealsSlice";
import { fetchStores } from "../../store/storesSlice";
import { RootState, AppDispatch } from "../../app/store";
import DealsList from "../../components/DealsList/DealsList";
import Pagination from "../../components/Pagination/Pagination";
import SortSelector from "../../components/SortSelector/SortSelector";
import Loader from "../../components/Loader/Loader";
import "./index.css";

const Deals = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { page, sortBy, isLoading } = useSelector(
    (state: RootState) => state.deals
  );

  // Fetch deals when page or sortBy changes
  useEffect(() => {
    dispatch(fetchDeals({ page, sortBy }));
  }, [page, sortBy, dispatch]);

  // Fetch stores on mount
  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  return (
    <div className="deals-container">
      <h1 className="deals-title">Deals of the day</h1>
      <SortSelector
        sortBy={sortBy}
        setSortBy={(value) => dispatch(setSortBy(value))}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DealsList />
          <Pagination
            page={page}
            onPageChange={(value) => dispatch(setPage(value))}
          />
        </>
      )}
    </div>
  );
};

export default Deals;
