import "./style.css";
import processToday from "./json/processToday";
import processForecast from "./json/processForecast";

const API = "7799c6fbb2534aaa8dc73800242806";
const ForecastDays = 3;
const defaultCity = "dallas";
const btn = document.querySelector("button");
const search = document.querySelector("input");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=${ForecastDays}`
    );
    if (response.status !== 200) {
      const errorData = await response.json();
      printError(errorData);
      throw new Error(errorData);
    }
    const data = await response.json();
    console.log(data);
    return processJson(data);
  } catch (err) {
    console.error(`${err}`);
  }
}

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

function printError(response) {
  console.log(
    `Error Code: ${response.error.code} Message: ${response.error.message}`
  );
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let city = defaultCity;
  if (search.value !== "") {
    city = search.value;
  }
  getWeather(city);
  search.value = "";
});

const weather = await getWeather(defaultCity);

console.log(weather);
//weather.today.print();
//weather.forecast[0].print();
//weather.forecast[0].getHourly(0).print();
