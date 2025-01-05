import React from 'react';
import './InfoBox.css';


const WeatherCard = ({ info }) => {
  const getWeatherClass = () => {
    if (info.humidity > 80) return 'weather-rainy';
    if (info.temp > 30) return 'weather-hot';
    return 'weather-cold';
  };

  const WeatherIcon = () => {
    if (info.humidity > 80) {
      return (
        <svg className="weather-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 16.2A4.5 4.5 0 0017 8.5a7 7 0 10-10 6.3" />
          <path d="M11 13v4M8 13v4M14 13v4" />
        </svg>
      );
    }
    if (info.temp > 30) {
      return (
        <svg className="weather-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    }
    return (
      <svg className="weather-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h3m3-3V6m3 6l-3-3m12 3h-3m-3-3V6m-3 6l3-3" />
      </svg>
    );
  };

  return (
    <div className="weather-card">
      <div className={`card-container ${getWeatherClass()}`}>
        <div className="card-header">
          <div className="city-info">
            <h2 className="city-name">{info.city}</h2>
            <WeatherIcon />
          </div>
          <div className="temperature">
            {Math.round(info.temp)}<span>°C</span>
          </div>
          <p className="weather-description">{info.weather}</p>
        </div>

        <div className="weather-details">
          <div className="details-grid">
            <div className="detail-item">
              <p className="detail-label">Humidity</p>
              <p className="detail-value">{info.humidity}%</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Feels Like</p>
              <p className="detail-value">{info.feelsLike}°C</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Min Temp</p>
              <p className="detail-value">{info.tempMin}°C</p>
            </div>
            <div className="detail-item">
              <p className="detail-label">Max Temp</p>
              <p className="detail-value">{info.tempMax}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;