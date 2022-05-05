import React from "react";
import axios from "axios";

const noteValue = {
  marginTop: "20px",
  marginBottom: "10px",
  color: "#ff4081",
  textAlign: "center",
};
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: {},
    };
  }

  getGame = (id) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
      .then((res) => res.data)
      .then((data) => {
        const infos = data.gameInfo;
        this.setState({ infos });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const { dealID } = this.props;
    this.getGame(dealID);
  }

  render() {
    const { infos } = this.state;
    const score = parseInt(infos.metacriticScore);
    return (
      <a
        href={`https://www.metacritic.com${infos.metacriticLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="note"
      >
        <p className="note-title">Game score</p>
        <h2 style={noteValue}>
          {score > 0 ? score : infos.steamRatingPercent} %
        </h2>
        <p>Get more info</p>
      </a>
    );
  }
}

export default Note;
