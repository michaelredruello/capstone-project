import { Fragment } from "react";

import Game from "./Game";
import Headers from "./Headers";

const AllGames = ({ games }) => {
  return (
    <Fragment>
      <div
        style={{
          width: "80%",
          backgroundColor: "black",
          position: "relative",
          left: "9%",
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

export default AllGames;
