import React, { Component } from "react";
import axios from "axios";
import "./PriceList.css";

class ShopDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  componentDidMount = () => {
    this.getStore();
  };

  getStore = () => {
    axios
      .get("https://www.cheapshark.com/api/1.0/stores")
      .then((res) => res.data)
      .then((data) => {
        const stores = data;
        this.setState({ stores });
      });
  };

  render() {
    const { storeID, dealID, price, savings } = this.props;
    const { stores } = this.state;
    const currentStore = stores.filter((store) => store.storeID === storeID);
    const storeName = currentStore.map((store) => store.storeName);
    const storeIcon = currentStore.map((store) => store.images.icon);

    return (
      <a
        className="store-price"
        href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
      >
        <div className="store-price-info">
          <img
            src={`https://www.cheapshark.com${storeIcon}`}
            alt="cheapshark_icon"
          />
          <p>{storeName}</p>
        </div>
        <div className="store-pricing">
          <p>
            {" "}
            {savings > 0 && "-" + Math.round(savings) + "% | "}
            {price} $
          </p>
        </div>
      </a>
    );
  }
}

export default ShopDeal;
