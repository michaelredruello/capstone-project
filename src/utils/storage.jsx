export const getGameInfos = async (gameID) => {
  return await fetch(
    `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
  ).then((res) => res.data);
};
