import { format } from "date-fns";
import windPng from "../assets/wind.png";
import waterPng from "../assets/water.png";
import rainPng from "../assets/rain.png";

function generateToday(data) {
  const today = document.querySelector(".today");

  today.innerHTML = "";

  // location elements

  const locationDiv = document.createElement("div");
  const name = document.createElement("h2");
  const location = document.createElement("h3");
  const country = document.createElement("h3");
  const time = document.createElement("h4");

  locationDiv.classList.add("location");

  name.textContent = data.today.name;
  location.textContent = data.today.location;
  country.textContent = data.today.country;
  time.textContent = format(data.today.date, "LLL d p");

  locationDiv.appendChild(name);
  locationDiv.appendChild(location);
  locationDiv.appendChild(country);

  // condition elements

  const conditionDiv = document.createElement("div");
  const conditionIcon = document.createElement("img");
  const condition = document.createElement("p");

  conditionDiv.classList.add("condition");

  conditionIcon.style.height = "5rem";
  conditionIcon.style.width = "5rem";

  conditionIcon.src = `https:${data.today.conditionIcon}`;
  condition.textContent = data.today.condition;

  conditionDiv.appendChild(conditionIcon);
  conditionDiv.appendChild(condition);

  // temperature div

  const temperature = document.createElement("div");
  const temperatureRange = document.createElement("div");
  const avgtemp_c = document.createElement("h5");
  const avgtemp_f = document.createElement("h5");
  const high_c = document.createElement("p");
  const low_c = document.createElement("p");
  const high_f = document.createElement("p");
  const low_f = document.createElement("p");

  temperature.classList.add("temperature");
  temperatureRange.classList.add("temperature-range");

  avgtemp_c.textContent = `${data.today.avgtemp_c} C`;
  avgtemp_f.textContent = `${data.today.avgtemp_f} F`;
  high_c.textContent = `High: ${data.forecast[0].high_c} C`;
  low_c.textContent = `Low: ${data.forecast[0].low_c} C`;
  high_f.textContent = `High: ${data.forecast[0].high_f} F`;
  low_f.textContent = `Low: ${data.forecast[0].low_f} F`;

  avgtemp_c.classList.add("metric");
  high_c.classList.add("metric");
  low_c.classList.add("metric");
  avgtemp_f.classList.add("imperial");
  high_f.classList.add("imperial");
  low_f.classList.add("imperial");

  temperatureRange.appendChild(high_c);
  temperatureRange.appendChild(low_c);
  temperatureRange.appendChild(high_f);
  temperatureRange.appendChild(low_f);

  temperature.appendChild(avgtemp_c);
  temperature.appendChild(avgtemp_f);
  temperature.appendChild(temperatureRange);

  // wind
  const wind = document.createElement("div");
  const windTitle = document.createElement("p");
  const wind_kph = document.createElement("p");
  const wind_mph = document.createElement("p");
  const windIcon = document.createElement("img");

  wind.classList.add("subsection");

  windIcon.style.height = "3rem";
  windIcon.style.width = "3rem";

  windTitle.textContent = "Wind";
  wind_kph.textContent = `${data.today.wind_kph} km/h ${data.today.wind_dir}`;
  wind_mph.textContent = `${data.today.wind_mph} mi/h ${data.today.wind_dir}`;
  windIcon.src = windPng;

  wind_kph.classList.add("metric");
  wind_mph.classList.add("imperial");

  wind.appendChild(windIcon);
  wind.appendChild(windTitle);
  wind.appendChild(wind_kph);
  wind.appendChild(wind_mph);

  // humidity
  const humidityDiv = document.createElement("div");
  const humidityTitle = document.createElement("p");
  const humidity = document.createElement("p");
  const humidityIcon = document.createElement("img");

  humidityDiv.classList.add("subsection");

  humidityIcon.style.height = "3rem";
  humidityIcon.style.width = "3rem";

  humidityTitle.textContent = "Humidity";
  humidity.textContent = `${data.today.humidity}%`;
  humidityIcon.src = waterPng;


  humidityDiv.appendChild(humidityIcon);
  humidityDiv.appendChild(humidityTitle);
  humidityDiv.appendChild(humidity);

  // rain
  const rainDiv = document.createElement("div");
  const rainTitle = document.createElement("p");
  const rainChance = document.createElement("p");
  const rainIcon = document.createElement("img");

  rainDiv.classList.add("subsection");

  rainIcon.style.height = "3rem";
  rainIcon.style.width = "3rem";

  rainTitle.textContent = "Chance of Rain";
  rainChance.textContent = `${data.forecast[0].rainChance}%`;
  rainIcon.src = rainPng;

  rainDiv.appendChild(rainIcon);
  rainDiv.appendChild(rainTitle);
  rainDiv.appendChild(rainChance);

  // subsections

  const subsections = document.createElement("div");
  subsections.classList.add("subsections");

  subsections.appendChild(wind);
  subsections.appendChild(humidityDiv);
  subsections.appendChild(rainDiv);

  today.appendChild(locationDiv);
  today.appendChild(time);
  today.appendChild(conditionDiv);
  today.appendChild(temperature);
  today.appendChild(subsections);
}

export default generateToday;
