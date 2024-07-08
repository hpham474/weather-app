import processToday from "./processToday";
import processForecast from "./processForecast";

function processJson(data) {
  const today = processToday(data);
  const forecast = [];

  data.forecast.forecastday.forEach((days) => {
    forecast.push(processForecast(days));
  });

  const weatherData = {
    today: today,
    forecast: forecast,
  };

  return weatherData;
}

export default processJson;