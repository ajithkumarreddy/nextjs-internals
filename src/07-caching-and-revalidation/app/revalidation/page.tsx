async function getWeather() {
  const res = await fetch(
    "https://weather-api.free.beeceptor.com/weather",
    {
      next: { revalidate: 60 },
    },
  );

  console.log("Fetching new weather data at:", new Date().toISOString());

  return res.json();
}

export default async function Page() {
  const { current_weather } = await getWeather();

  const refreshedAt = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Weather App</h1>
      <hr />

      <h2>Temperature: {current_weather.temperature}°C</h2>
      <p>Wind Speed: {current_weather.windspeed}</p>
      <p>Time: {current_weather.time}</p>
      <hr />

      <p>
        <strong>Last refreshed:</strong> {refreshedAt}
      </p>
    </div>
  );
}
