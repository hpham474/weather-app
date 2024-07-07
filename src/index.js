import "./style.css";
import processToday from "./json/processToday";
import processForecast from "./json/processForecast";
import generateToday from "./interface/generateToday";
import generateHourly from "./interface/generateHourly";
import switchMeasurement from "./interface/setMeasurementUnit";
import generateDaily from "./interface/generateDaily";

const API = "7799c6fbb2534aaa8dc73800242806";
const ForecastDays = 3;
const defaultCity = "dallas";
const searchBtn = document.querySelector(".search");
const search = document.querySelector("input");
const formatBtn = document.querySelector(".format");

async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=${ForecastDays}`
  );
  const errorResponse = document.querySelector(".error");
  if (response.status !== 200) {
    const errorData = await response.json();

    console.log(errorData);
    errorResponse.textContent = `Error code ${errorData.error.code}: ${errorData.error.message}`;
    errorResponse.style.display = "block";
  } else {
    const data = await response.json();
    console.log(data);
    errorResponse.style.display = "none";
    return processJson(data);
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

searchBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let city = defaultCity;
  if (search.value !== "") {
    city = search.value;
  }
  const weather = await getWeather(city);
  console.log(weather);
  if (weather !== undefined) {
    generateToday(weather);
    generateHourly(weather);
    generateDaily(weather);

    // calls twice to keep the same measurement
    switchMeasurement();
    switchMeasurement();
  }

  search.value = "";
});

formatBtn.addEventListener("click", switchMeasurement);

const weather = await getWeather(defaultCity);

console.log(weather);
//weather.today.print();
//weather.forecast[0].print();
//weather.forecast[0].getHourly(0).print();
if (weather !== undefined) {
  generateToday(weather);
  generateHourly(weather);
  generateDaily(weather);

  switchMeasurement();
}