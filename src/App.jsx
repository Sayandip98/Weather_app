import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message || "City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Something went wrong, Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <h1>Weather App</h1>
        <p className="subtitle">Search real-time weather by city</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={getWeather}>Search</button>
        </div>

        {loading && <p className="loading">Loading weather...</p>}
        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard weather={weather}/>}
      </div>
    </div>
  );
}

export default App;
