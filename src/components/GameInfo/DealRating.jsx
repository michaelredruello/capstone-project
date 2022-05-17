import React from "react";
import axios from "axios";

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
      <a href={dealUrl} className="best-deal button">
        <p style={{ marginTop: "20px" }}>Best deal</p>
        <h2 style={{ marginTop: "30px" }}>{this.state.price} $</h2>
        Buy!
      </a>
    );
  }
}

export default DealRating;
