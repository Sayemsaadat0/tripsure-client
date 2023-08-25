import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
    const [location, setLocation] = useState(''); // Selected location
    const [weatherData, setWeatherData] = useState(null); // Fetched weather data

    useEffect(() => {
        if (location) {
            // Replace with your weather API endpoint and API key
            const apiKey = 'YOUR_API_KEY';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=83e533c18c1fed055e1c613985cc52aa&units=metric`;

            axios.get(apiUrl)
                .then(response => {
                    setWeatherData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [location]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
            <input
                type="text"
                className="p-2 border rounded"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            {weatherData && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="text-xl font-semibold">{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        alt={weatherData.weather[0].description}
                    />
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;