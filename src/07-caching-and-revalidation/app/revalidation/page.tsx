async function getWeather() {
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true", {
    next: { revalidate: 60 },
  });

  return res.json();
}

export default async function Page() {
  const { current_weather } = await getWeather();

  const refreshedAt = new Date().toISOString();

  return (
    <div>
      <h1>Weather App</h1>
      <hr />

      <h2>Temperature: {current_weather.temperature}°C</h2>
      <p>Wind Speed: {current_weather.windspeed}</p>
      <p>Time: {current_weather.time}</p>

      <hr />

      <p>
        <strong>Last refreshed at:</strong> {refreshedAt}
      </p>
    </div>
  );
}
