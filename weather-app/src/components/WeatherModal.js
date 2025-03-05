import React from 'react';

const WeatherModal = ({ weatherData, error, location, onClose }) => {
  if (!weatherData && !error) return null;

  return (
    <div className="modal-overlay"> {}
      <div className="modal-content"> {}
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            <h2>{weatherData.name || 'Selected Location'}</h2> {}
            <p>Temperature: {weatherData.main.temp}°C</p> {}
            <p>Weather: {weatherData.weather[0].description}</p> {}
            <p>Humidity: {weatherData.main.humidity}%</p> {}
            <p>Wind Speed: {weatherData.wind.speed} m/s</p> {}
            <p>Coordinates: {location.lat.toFixed(2)}, {location.lng.toFixed(2)}</p> {}
          </>
        )}
        <button onClick={onClose}>Close</button> {}
      </div>
    </div>
  );
};

export default WeatherModal;