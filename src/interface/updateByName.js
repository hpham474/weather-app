import getWeather from "../weather/getWeather";
import generateHourly from "./generateHourly";
import generateToday from "./generateToday";
import generateDaily from "./generateDaily";
import switchMeasurement from "./setMeasurementUnit";

const search = document.querySelector("input");

async function updateByName() {
  let city = "";
  if (search.value !== "") {
    city = search.value;
  } else {
    return;
  }
  const weather = await getWeather(city);
  if (weather !== undefined) {
    generateToday(weather);
    generateHourly(weather);
    generateDaily(weather);

    // calls twice to keep the same measurement
    switchMeasurement();
    switchMeasurement();
  }

  search.value = "";
}

export default updateByName;
