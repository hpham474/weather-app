import "./style.css";
import generateToday from "./interface/generateToday";
import generateHourly from "./interface/generateHourly";
import switchMeasurement from "./interface/setMeasurementUnit";
import generateDaily from "./interface/generateDaily";
import getWeather from "./weather/getWeather";
import { defaultCity } from "./weather/api";
import updateByName from "./interface/updateByName";

const searchBtn = document.querySelector(".search");
const formatBtn = document.querySelector(".format");

searchBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  await updateByName();
});

formatBtn.addEventListener("click", switchMeasurement);

const weather = await getWeather(defaultCity);

console.log(weather);
if (weather !== undefined) {
  generateToday(weather);
  generateHourly(weather);
  generateDaily(weather);

  switchMeasurement();
}