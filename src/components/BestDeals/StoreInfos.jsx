import axios from "axios";
import { useState, useEffect } from "react";

const StoreInfos = (props) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStore();
  }, []);

  const getStore = () => {
    axios
      .get("https://www.cheapshark.com/api/1.0/stores")
      .then((res) => res.data)
      .then((data) => {
        setStores(data);
      });
  };

  const currentStore = stores.filter(
    (store) => store.storeID === props.storeID
  );
  const storeName = currentStore.map((store) => store.storeName);
  const storeIcon = currentStore.map((store) => store.images.icon);

  return (
    <p className="available-store">
      Available on
      <img
        src={`https://www.cheapshark.com${storeIcon}`}
        alt="cheapshark_icon"
      />
      {storeName}
    </p>
  );
};

export default StoreInfos;
