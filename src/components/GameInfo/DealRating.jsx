import React from "react";
import axios from "axios";

const price = {
  marginTop: "30px",
};
const priceValue = {
  marginTop: "20px",
};

class DealRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }

  getDealRating = (id) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const salePrice = data.gameInfo.salePrice;
        this.setState({ price: salePrice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const { dealID } = this.props;
    this.getDealRating(dealID);
  }

  render() {
    const { dealID } = this.props;
    const dealUrl = `https://www.cheapshark.com/redirect?dealID=${dealID}`;
    return (
      <a href={dealUrl} className="best-deal">
        <p style={priceValue}>Best deal</p>
        <h2 style={price}>{this.state.price} $</h2>
        <a
          className="button"
          href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
          target="_blank"
        >
          Buy !
        </a>
      </a>
    );
  }
}

export default DealRating;
