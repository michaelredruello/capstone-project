import React, { Component } from "react";
import SearchList from "./SearchList";
import "./Search.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      games: [],
      isFocus: false,
    };
  }

  getGames = (input) => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${input}&limit=15`)
      .then((response) => response.data)
      .then((data) => {
        const games = data;
        this.setState({ games });
      });
  };

  handleSearch = () => {
    this.props.history.push({
      pathname: `/search`,
      state: { games: this.state.games },
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
    if (value.length > 0) {
      this.setState({ isFocus: true });
      this.getGames(value);
    } else {
      this.setState({ isFocus: false });
    }
  };

  handleFocus = () => {
    this.setState({ isFocus: true });
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ isFocus: false });
    }, 150);
  };

  render() {
    const { games, isFocus } = this.state;
    return (
      <div className="search-form">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Look for a game"
            autoComplete="off"
            id="main-search"
            name="search"
            value={this.state.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
        </form>

        {isFocus && <SearchList games={games.slice(0, 5)} />}
      </div>
    );
  }
}

export default withRouter(Search);
