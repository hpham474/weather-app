import "./style.css";
import generateToday from "./interface/generateToday";
import generateHourly from "./interface/generateHourly";
import switchMeasurement from "./interface/setMeasurementUnit";
import generateDaily from "./interface/generateDaily";
import getWeather from "./weather/getWeather";
import { defaultCity } from "./weather/api";
import updateByName from "./interface/updateByName";
import search from "./interface/search";

const searchBtn = document.querySelector(".search");
const formatBtn = document.querySelector(".format");

searchBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  await updateByName();
});

formatBtn.addEventListener("click", switchMeasurement);

const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("input", search);
searchBar.addEventListener("focusin", search);

const weather = await getWeather(defaultCity);

if (weather !== undefined) {
  generateToday(weather);
  generateHourly(weather);
  generateDaily(weather);

  switchMeasurement();
}
