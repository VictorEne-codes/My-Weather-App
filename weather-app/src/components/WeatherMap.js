import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = ({ onLocationSelect, weatherData, setWeatherData, setError }) => {
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        onLocationSelect({ lat, lng });
        
        const API_KEY = '65a9b63d33b2a81484ad4baf854dfe9e';
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => setWeatherData(data))
          .catch(() => {
            setError('Failed to fetch weather data');
            setWeatherData(null);
          });
      },
    });

    return weatherData ? (
      <Marker position={[weatherData.coord.lat, weatherData.coord.lon]} />
    ) : null;
  };

  return (
    <MapContainer 
      center={[6.5244, 3.3792]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      <LocationMarker /> {}
    </MapContainer>
  );
};

export default WeatherMap;