import { API, ForecastDays } from "./api";
import processJson from "../json/processJson";

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

export default getWeather;