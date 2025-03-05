// src/App.js
import React, { useState } from 'react'; // Import React and useState hook
import WeatherMap from './components/WeatherMap'; // Import WeatherMap component
import WeatherModal from './components/WeatherModal'; // Import new WeatherModal component
import './App.css'; // Import CSS styles

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null); // State for clicked location coordinates
  const [weatherData, setWeatherData] = useState(null); // State for weather data
  const [error, setError] = useState(null); // State for error messages

  return (
    <div className="app"> {/* Main container */}
      <WeatherMap 
        onLocationSelect={(latlng) => { // Handle location selection
          setSelectedLocation(latlng); // Update location
          setError(null); // Clear errors
        }}
        weatherData={weatherData} // Pass weather data
        setWeatherData={setWeatherData} // Pass setter for weather data
        setError={setError} // Pass setter for error
      />
      <WeatherModal 
        weatherData={weatherData} // Pass weather data to modal
        error={error} // Pass error to modal
        location={selectedLocation} // Pass location to modal
        onClose={() => { // Handle modal close
          setWeatherData(null); // Clear weather data
          setSelectedLocation(null); // Clear location
          setError(null); // Clear error
        }}
      />
    </div>
  );
}

export default App; // Export App component