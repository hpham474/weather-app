import ForecastWeather from "../weather/ForecastWeather";

function processForecast(data) {
  const weather = new ForecastWeather(
    data.date,
    data.day.condition.text,
    data.day.condition.icon,
    data.day.avgtemp_f,
    data.day.avgtemp_c,
    data.day.maxtemp_f,
    data.day.maxtemp_c,
    data.day.mintemp_f,
    data.day.mintemp_c,
    data.day.avghumidity,
    data.day.daily_will_it_rain,
    data.hour
  );

  return weather;
}

export default processForecast;
