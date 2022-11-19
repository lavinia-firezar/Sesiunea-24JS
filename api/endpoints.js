const APPID = "30faa1389b1f9794d1af6a0b0c354a2a";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}
