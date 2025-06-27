export default async function handler(req, res) {
  const { steamAppId } = req.query;

  const response = await fetch(
    `https://steam2.p.rapidapi.com/appDetail/${steamAppId}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_STEAM_API_KEY,
        "X-RapidAPI-Host": "steam2.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Steam fetch failed" });
  }

  const data = await response.json();
  res.status(200).json(data);
}
