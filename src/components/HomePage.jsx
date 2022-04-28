import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Headers = () => {
  return (
    <thead class="thead-dark">
      <tr style={{}}>
        <th
          scope="col"
          style={{
            width: "30%%",
            paddingLeft: "25px",
            fontFamily: "Syne Mono",
          }}
          class="h4"
        >
          TITLE
        </th>
        <th
          scope="col"
          style={{ width: "20%", fontFamily: "Syne Mono" }}
          class="h4"
        >
          Normal Price
        </th>
        <th
          scope="col"
          style={{ width: "15%", fontFamily: "Syne Mono" }}
          class="h4"
        >
          Sale Price
        </th>
      </tr>
    </thead>
  );
};

const Game = ({ game }) => {
  const Img = styled.img`
    max-width: 140px;
    max-height: 45px;
  `;
  return (
    <tr style={{ padding: "0px" }}>
      <td style={{ width: "37%", padding: "0px", paddingBottom: "0px" }}>
        <td
          style={{
            float: "left",
            display: "inline-block",
            width: "120px",
            height: "45px",
            textAlign: "center",
            padding: "0px 0px 0px 0px",
            border: "0px solid",
            backgroundColor: "black",
          }}
        >
          <Img
            alt="404"
            src={game.thumb}
            class="img-fluid"
            style={{ padding: "0px" }}
          />
        </td>
        <div style={{ marginTop: "10px" }}>
          <a
            style={{ float: "left" }}
            href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
          >
            {game.title}
          </a>
        </div>
      </td>
      <td
        style={{
          padding: "10px 0px 0px 0px",
          color: "white",
          paddingLeft: "50px",
        }}
      >
        ${game.normalPrice}
      </td>
      <td
        style={{
          padding: "10px 0px 0px 0px",
          color: "white",
          paddingLeft: "45px",
        }}
      >
        ${game.salePrice}
      </td>
    </tr>
  );
};

const AllGames = ({ games }) => {
  return (
    <Fragment>
      <div
        style={{
          width: "80%",
          backgroundColor: "black",
          position: "relative",
          left: "9%",
          border: "25px solid grey",
          borderRadius: "25px",
        }}
      >
        <table class="table table-border" style={{ width: "100%" }}>
          <Headers />
          <tbody>
            {games ? games.map((g) => <Game game={g} />) : <div></div>}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const HomePage = () => {
  let [games, setGames] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://www.cheapshark.com/api/1.0/deals?");
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
