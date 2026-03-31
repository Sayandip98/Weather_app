function WeatherCard({weather}) {

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img src={iconUrl} alt="weather icon" className="weather-icon" />

      <h3>{Math.round(weather.main.temp)}°C</h3>

      <p className="weather-main">{weather.weather[0].main}</p>
      <p className="weather-desc">{weather.weather[0].description}</p>
      <div className="weather-details">
        <div className="detail-box">
          <span>Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>
        <div className="detail-box">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>
        <div className="detail-box">
          <span>Wind</span>
          <strong>{weather.wind.speed}m/s</strong>
        </div>
        <div className="detail-box">
          <span>Pressure</span>
          <strong>{weather.main.pressure}hPa</strong>
        </div>
      </div>
    </div>
  );
}
export default WeatherCard;
