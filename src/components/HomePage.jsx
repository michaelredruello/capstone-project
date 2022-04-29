import "bootstrap/dist/css/bootstrap.min.css";
import AllGames from "./AllGames";
import { useEffect, useState } from "react";

const HomePage = () => {
  let [games, setGames] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(
        "https://www.cheapshark.com/api/1.0/deals?pageNumber=5&pageSize=30"
      );
      const data = await response.json();
      setGames(data);
    }
    fetchMyAPI();
  }, []);

  const Background =
    "https://i.pinimg.com/564x/8e/ee/04/8eee04aeefee34699b413b5a55079b82.jpg";

  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundColor: "white",
      }}
    >
      <AllGames games={games} />
    </div>
  );
};

export default HomePage;
