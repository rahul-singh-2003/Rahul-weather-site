import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      
      if (jsonResponse.cod === "404") {
        throw new Error("City not found");
      }

      return {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      evt.target.classList.add("success");
      setTimeout(() => evt.target.classList.remove("success"), 300);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1 className="search-title">
        <svg className="weather-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        Weather Forecast
        <svg className="weather-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 16.2A4.5 4.5 0 0017 8.5a7 7 0 10-10 6.3" />
          <path d="M11 13v4M8 13v4M14 13v4" />
        </svg>
      </h1>

      <form 
        onSubmit={handleSubmit} 
        className={`search-form ${loading ? "loading" : ""}`}
      >
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder=" "
            value={city}
            onChange={handleChange}
            required
          />
          <label className="search-label">Enter City Name</label>
        </div>

        <button 
          className="search-button" 
          type="submit"
          disabled={loading}
        >
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {loading ? (
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            ) : (
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            )}
          </svg>
          {loading ? "Searching..." : "Search Weather"}
        </button>

        {error && (
          <div className="error-message">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            No such place exists!
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBox;