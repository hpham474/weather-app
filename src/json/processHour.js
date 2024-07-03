import HourlyWeather from "../weather/HourlyWeather";

function processHour(data) {
  const weather = new HourlyWeather(
    data.time,
    data.condition.text,
    data.condition.icon,
    data.chance_of_rain,
    data.temp_f,
    data.temp_c
  );

  return weather;
}

export default processHour;
