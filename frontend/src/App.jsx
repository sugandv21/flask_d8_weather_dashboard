import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);
    try {
     const response = await fetch("https://flask-d8-weather-dashboard.onrender.com/api/weather");

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(); 
    const interval = setInterval(fetchWeather, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Live Weather Dashboard</h2>
      <div className="d-flex justify-content-center">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          weather && (
            <div className="card shadow p-3" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Location: Chennai</h5>
                <p className="card-text">Temp: {weather.temperature}°C</p>
                <p className="card-text">Humidity: {weather.humidity}%</p>
                <p className="card-text"> Status: {weather.status}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
