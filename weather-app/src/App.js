import React, { useState } from 'react';
import WeatherMap from './components/WeatherMap';
import WeatherModal from './components/WeatherModal';
import './App.css';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app"> {}
      <WeatherMap 
        onLocationSelect={(latlng) => {
          setSelectedLocation(latlng);
          setError(null);
        }}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        setError={setError}
      />
      <WeatherModal 
        weatherData={weatherData}
        error={error}
        location={selectedLocation}
        onClose={() => {
          setWeatherData(null);
          setSelectedLocation(null);
          setError(null);
        }}
      />
    </div>
  );
}

export default App;