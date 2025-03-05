// src/components/WeatherModal.js (New Component)
import React from 'react'; // Import React

const WeatherModal = ({ weatherData, error, location, onClose }) => { // Modal component with props
  if (!weatherData && !error) return null; // Don't render if no data or error

  return (
    <div className="modal-overlay"> {/* Overlay for modal */}
      <div className="modal-content"> {/* Modal content container */}
        {error ? ( // Check for error
          <div className="error">{error}</div> // Display error
        ) : (
          <>
            <h2>{weatherData.name || 'Selected Location'}</h2> {/* Location name */}
            <p>Temperature: {weatherData.main.temp}°C</p> {/* Temperature */}
            <p>Weather: {weatherData.weather[0].description}</p> {/* Description */}
            <p>Humidity: {weatherData.main.humidity}%</p> {/* Humidity */}
            <p>Wind Speed: {weatherData.wind.speed} m/s</p> {/* Wind speed */}
            <p>Coordinates: {location.lat.toFixed(2)}, {location.lng.toFixed(2)}</p> {/* Coordinates */}
          </>
        )}
        <button onClick={onClose}>Close</button> {/* Close button */}
      </div>
    </div>
  );
};

export default WeatherModal; // Export WeatherModal