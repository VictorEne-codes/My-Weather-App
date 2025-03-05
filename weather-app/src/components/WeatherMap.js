// src/components/WeatherMap.js
// Remains unchanged from your last version, keeping Lagos as center
import React from 'react'; // Import React
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'; // Import Leaflet components
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const WeatherMap = ({ onLocationSelect, weatherData, setWeatherData, setError }) => { // Component with props
  const LocationMarker = () => { // Inner component for map events
    useMapEvents({ // Hook for map events
      click(e) { // Handle map clicks
        const { lat, lng } = e.latlng; // Get coordinates
        onLocationSelect({ lat, lng }); // Update parent
        
        const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // API key
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
          .then(response => response.json()) // Parse response
          .then(data => setWeatherData(data)) // Set weather data
          .catch(() => {
            setError('Failed to fetch weather data'); // Set error
            setWeatherData(null); // Clear data on error
          });
      },
    });

    return weatherData ? ( // Show marker if data exists
      <Marker position={[weatherData.coord.lat, weatherData.coord.lon]} /> // Marker at weather location
    ) : null; // No marker if no data
  };

  return (
    <MapContainer 
      center={[6.5244, 3.3792]} // Center on Lagos, Nigeria
      zoom={13} // Zoom level
      style={{ height: '100%', width: '100%' }} // Map size
    >
      <TileLayer // Map tiles
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Tile source
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution
      />
      <LocationMarker /> {/* Render marker component */}
    </MapContainer>
  );
};

export default WeatherMap; // Export WeatherMap