import { useEffect, useState } from "react";
import "./App.css";

const weatherCodes = {
  0: ["Clear sky", "☀️"],
  1: ["Mainly clear", "🌤️"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Foggy", "🌫️"],
  48: ["Rime fog", "🌫️"],
  51: ["Light drizzle", "🌦️"],
  53: ["Drizzle", "🌦️"],
  55: ["Heavy drizzle", "🌧️"],
  61: ["Light rain", "🌦️"],
  63: ["Rain", "🌧️"],
  65: ["Heavy rain", "🌧️"],
  71: ["Light snow", "🌨️"],
  73: ["Snow", "❄️"],
  75: ["Heavy snow", "❄️"],
  80: ["Rain showers", "🌦️"],
  81: ["Rain showers", "🌧️"],
  82: ["Heavy showers", "⛈️"],
  95: ["Thunderstorm", "⛈️"],
  96: ["Thunderstorm + hail", "⛈️"],
  99: ["Thunderstorm + hail", "⛈️"],
};

function App() {
  const [city, setCity] = useState("Bengaluru");
  const [search, setSearch] = useState("Bengaluru");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [lastSearched, setLastSearched] = useState("");

  async function fetchWeather(cityName) {
    if (!cityName.trim()) return;

    setLoading(true);
    setError("");

    try {
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Unable to find location.");
      }

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found. Try another location.");
      }

      const selectedLocation = locationData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();

      setLocation(selectedLocation);
      setWeather(weatherData);
      setCity(selectedLocation.name);
      setLastSearched(cityName);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather("Bengaluru");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather(search);
  }

  const currentCode = weather?.current?.weather_code;

  const currentWeather =
    weatherCodes[currentCode] || ["Unknown conditions", "🌤️"];

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">✦</div>

          <div>
            <h1>DEXTRO</h1>
            <span>WEATHER</span>
            <small>A project by Dheeraj Heggade</small>
          </div>
        </div>

        <div className="api-status">
          <span className="status-dot"></span>
          LIVE API
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <span className="eyebrow">REAL-TIME WEATHER</span>

            <h2>
              Weather,
              <span> simplified.</span>
            </h2>

            <p>
              Search any city and get live weather conditions,
              temperature, wind, humidity, and a five-day forecast.
            </p>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search a city..."
              aria-label="Search city"
            />

            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </section>

        {error && (
          <div className="error-box">
            <span>⚠️</span>

            <div>
              <strong>Unable to find weather</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {loading && !weather && (
          <div className="loading-box">
            <div className="loader"></div>

            <p>Fetching live weather data...</p>
          </div>
        )}

        {weather && location && (
          <>
            <section className="current-weather">
              <div className="location">
                <span className="location-pin">●</span>

                <div>
                  <h3>{location.name}</h3>

                  <p>
                    {location.country || "Unknown country"}
                    {location.admin1
                      ? ` · ${location.admin1}`
                      : ""}
                  </p>
                </div>
              </div>

              <div className="current-main">
                <div className="weather-icon">
                  {currentWeather[1]}
                </div>

                <div className="temperature">
                  <strong>
                    {Math.round(
                      weather.current.temperature_2m
                    )}
                    °
                  </strong>

                  <span>
                    {weather.current_units.temperature_2m}
                  </span>
                </div>

                <div className="condition">
                  <h3>{currentWeather[0]}</h3>

                  <p>
                    Feels like{" "}
                    {Math.round(
                      weather.current.apparent_temperature
                    )}
                    °
                  </p>
                </div>
              </div>

              <div className="weather-stats">
                <div>
                  <span>Humidity</span>

                  <strong>
                    {weather.current.relative_humidity_2m}%
                  </strong>
                </div>

                <div>
                  <span>Wind</span>

                  <strong>
                    {Math.round(
                      weather.current.wind_speed_10m
                    )}{" "}
                    km/h
                  </strong>
                </div>

                <div>
                  <span>Daylight</span>

                  <strong>
                    {weather.current.is_day ? "Day" : "Night"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="forecast-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">FORECAST</span>

                  <h2>Next 5 days</h2>
                </div>

                {lastSearched && (
                  <span className="updated">
                    Updated for {city}
                  </span>
                )}
              </div>

              <div className="forecast-grid">
                {weather.daily.time.map((date, index) => {
                  const code =
                    weather.daily.weather_code[index];

                  const forecast =
                    weatherCodes[code] || [
                      "Unknown",
                      "🌤️",
                    ];

                  const day = new Date(
                    `${date}T12:00:00`
                  ).toLocaleDateString("en-US", {
                    weekday: "short",
                  });

                  return (
                    <article
                      className={`forecast-card ${
                        index === 0 ? "today" : ""
                      }`}
                      key={date}
                    >
                      <span className="forecast-day">
                        {index === 0 ? "Today" : day}
                      </span>

                      <div className="forecast-icon">
                        {forecast[1]}
                      </div>

                      <strong>{forecast[0]}</strong>

                      <div className="forecast-temperatures">
                        <span>
                          {Math.round(
                            weather.daily
                              .temperature_2m_max[index]
                          )}
                          °
                        </span>

                        <small>
                          {Math.round(
                            weather.daily
                              .temperature_2m_min[index]
                          )}
                          °
                        </small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </main>

      <footer>
        <p>DEXTRO Weather · Powered by Open-Meteo</p>
      </footer>
    </div>
  );
}

export default App;