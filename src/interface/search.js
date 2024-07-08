import { API } from "../weather/api";
import getWeather from "../weather/getWeather";
import generateToday from "./generateToday";
import generateHourly from "./generateHourly";
import generateDaily from "./generateDaily";
import switchMeasurement from "./setMeasurementUnit";

const searchBar = document.querySelector("#search-bar");
const suggestionsDiv = document.querySelector(".suggestions");
let suggestions = [];

async function search() {
  suggestionsDiv.innerHTML = "";
  if (searchBar.value.length < 3) {
    return;
  }
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API}&q=${searchBar.value}`
    );

    const data = await response.json();

    suggestions = data;

    suggestions.forEach((result) => {
      const suggestEle = document.createElement("button");
      suggestEle.textContent = `${result.name}, ${result.region}, ${result.country}`;
      suggestEle.type = "button";
      suggestEle.addEventListener("click", async () => {
        const weather = await getWeather(`id:${result.id}`);
        if (weather !== undefined) {
          generateToday(weather);
          generateHourly(weather);
          generateDaily(weather);

          switchMeasurement();
        }
        suggestionsDiv.innerHTML = "";
        searchBar.value = "";
      });
      suggestionsDiv.appendChild(suggestEle);
    });
  } catch (error) {
    console.error(error);
  }
}

export default search;
