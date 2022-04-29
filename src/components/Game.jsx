import styled from "styled-components";

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

export default Game;
