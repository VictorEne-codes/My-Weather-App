# Weather App
## Weather App Demo
A simple React application that displays weather information on an interactive map.
The Weather App is an interactive React-based application that allows users to explore weather data worldwide using an interactive map. Built with React Leaflet and integrated with the OpenWeatherMap API, this app provides real-time weather details for any location clicked on the map, displayed in a responsive modal.

# Table of Contents
## Features
## Technologies Used
## Usage
## Acknowledgements

# Features
- Interactive Map: Click anywhere on the map to fetch weather data for that location.
- Real-Time Weather: Displays current temperature, weather description, humidity, wind speed, and coordinates.
- Responsive Design: Works seamlessly on desktop and mobile devices with a modal-based weather display.
- Error Handling: Gracefully handles API errors with user-friendly messages.
- Centered on Lagos: Map defaults to Lagos, Nigeria, with adjustable zoom.

# Technologies Used
### Frontend:
- React - JavaScript library for building user interfaces
- React Leaflet - React components for Leaflet maps
- Leaflet - Open-source JavaScript library for interactive maps

### API:
- OpenWeatherMap API - Provides weather data

### Styling:
- Plain CSS - For responsive and clean styling

### Tools:
- Node.js - JavaScript runtime for development
- npm - Package manager
- Git - Version control

# Usage
## How to Use the Map
- Open the App:
Launch the app with npm start. The map defaults to Lagos, Nigeria (latitude: 6.5244, longitude: 3.3792).
- Interact with the Map:
Click Anywhere: Click any point on the map to fetch weather data for that location.
- Zoom and Pan: Use your mouse wheel or pinch gestures (on mobile) to zoom, and drag to pan across the map.
- View Weather Data:
A modal will appear with:
-- Location name (if available)
-- Temperature (°C)
-- Weather description (e.g., "clear sky")
-- Humidity (%)
-- Wind speed (m/s)
-- Coordinates (latitude, longitude)

If there’s an error (e.g., API failure), an error message will display instead.

- Close the Modal:
Click the "Close" button to dismiss the modal and reset the map.
- Mobile Experience:
On smaller screens, the modal adjusts to fit, remaining readable and scrollable if needed.

# Acknowledgements
- OpenWeatherMap for the free weather API.
- React Leaflet and Leaflet for map functionality.
- Create React App for the project boilerplate.

