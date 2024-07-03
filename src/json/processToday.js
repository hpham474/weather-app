import TodayWeather from "../weather/TodayWeather";

function processToday(data) {
  const weather = new TodayWeather(
    data.location.name,
    data.location.region,
    data.location.country,
    data.location.localtime,
    data.current.condition.text,
    data.current.condition.icon,
    data.current.temp_f,
    data.current.temp_c,
    data.current.wind_mph,
    data.current.wind_kph,
    data.current.wind_dir,
    data.current.humidity,
    data.current.is_day,
    data.forecast.forecastday[0].astro.sunrise,
    data.forecast.forecastday[0].astro.sunset
  );

  return weather;
}

export default processToday;
