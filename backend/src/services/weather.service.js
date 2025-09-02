import axios from "axios";

export const fetchWeatherData = async (lat, lon) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const { data } = await axios.get(url);

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: data.weather[0].description,
  };
};
