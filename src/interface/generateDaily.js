import { format, isToday } from "date-fns";

function generateDaily(data) {
  const dailyForecast = document.querySelector(".forecast");

  dailyForecast.innerHTML = "";

  // get the next upcoming days
  const days = data.forecast;

  // header
  const title = document.createElement("h2");
  title.textContent = "Daily Weather";

  // hourly forecast
  days.forEach((hourlyForecast) => {
    const forecast = document.createElement("div");
    const time = document.createElement("p");
    const icon = document.createElement("img");
    const condition = document.createElement("p");
    const chanceOfRain = document.createElement("p");
    const high_c = document.createElement("p");
    const low_c = document.createElement("p");
    const high_f = document.createElement("p");
    const low_f = document.createElement("p");

    icon.style.height = "3rem";
    icon.style.width = "3rem";

    // reconstruct date object because of issues with day index starting form 0
    // would result in wrong weekday
    const dateArray = hourlyForecast.date.split("-");
    const now = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);

    if (isToday(now)) {
      time.textContent = "Today";
    } else {
      time.textContent = format(now, "E");
    }
    icon.src = `http:${hourlyForecast.conditionIcon}`;
    condition.textContent = hourlyForecast.condition;
    chanceOfRain.textContent = `Chance of Rain: ${hourlyForecast.rainChance}%`;
    high_c.textContent = `High: ${hourlyForecast.high_c} C`;
    low_c.textContent = `Low: ${hourlyForecast.low_c} C`;
    high_f.textContent = `High: ${hourlyForecast.high_f} F`;
    low_f.textContent = `Low: ${hourlyForecast.low_f} F`;

    high_c.classList.add("metric");
    low_c.classList.add("metric");
    high_f.classList.add("imperial");
    low_f.classList.add("imperial");

    forecast.appendChild(time);
    forecast.appendChild(icon);
    forecast.appendChild(condition);
    forecast.appendChild(chanceOfRain);
    forecast.appendChild(high_c);
    forecast.appendChild(low_c);
    forecast.appendChild(high_f);
    forecast.appendChild(low_f);

    dailyForecast.appendChild(forecast);
  });
}

export default generateDaily;
