import { isBefore, isAfter, addDays, format } from "date-fns";
import sunrisePng from "../assets/sunrise.png";
import sunsetPng from "../assets/sunset.png";

function generateHourly(data) {
  const hourly = document.querySelector(".hourly");

  hourly.innerHTML = "";

  // get the next two days of hourly forecast
  const currentTime = data.today.date;
  const twoDays = data.forecast[0].hourlyWeather.concat(
    data.forecast[1].hourlyWeather
  );
  const hourlyWeather = [];

  const dayOneSunrise = `${currentTime.substring(0, 10)} ${convertTo24(data.forecast[0].sunrise)}`;
  const dayOneSunset = `${currentTime.substring(0, 10)} ${convertTo24(data.forecast[0].sunset)}`;
  const dayTwoSunrise = `${format(addDays(currentTime, 1), "yyyy-MM-dd")} ${convertTo24(data.forecast[1].sunrise)}`;
  const dayTwoSunset = `${format(addDays(currentTime, 1), "yyyy-MM-dd")} ${convertTo24(data.forecast[1].sunset)}`;

  // get the hourly forecast after the current time
  for (let i = 1; i < twoDays.length - 1; i++) {
    if (isBefore(currentTime, twoDays[i].time)) {
      hourlyWeather.push(twoDays[i - 1]);
    }
  }

  // add in sunrise and sunset
  for (let i = 0; i < hourlyWeather.length - 1; i++) {
    if (
      isAfter(dayOneSunrise, hourlyWeather[i].time) &&
      isBefore(dayOneSunrise, hourlyWeather[i + 1].time)
    ) {
      hourlyWeather.splice(i + 1, 0, {
        time: dayOneSunrise,
        condition: "sunrise",
      });
      i++;
    }
    if (
      isAfter(dayOneSunset, hourlyWeather[i].time) &&
      isBefore(dayOneSunset, hourlyWeather[i + 1].time)
    ) {
      hourlyWeather.splice(i + 1, 0, {
        time: dayOneSunset,
        condition: "sunset",
      });
      i++;
    }
    if (
      isAfter(dayTwoSunrise, hourlyWeather[i].time) &&
      isBefore(dayTwoSunrise, hourlyWeather[i + 1].time)
    ) {
      hourlyWeather.splice(i + 1, 0, {
        time: dayTwoSunrise,
        condition: "sunrise",
      });
      i++;
    }
    if (
      isAfter(dayTwoSunset, hourlyWeather[i].time) &&
      isBefore(dayTwoSunset, hourlyWeather[i + 1].time)
    ) {
      hourlyWeather.splice(i + 1, 0, {
        time: dayTwoSunset,
        condition: "sunset",
      });
      i++;
    }
  }

  // cut out forecast after 1 day
  for (let i = 0; i < hourlyWeather.length; i++) {
    if (isAfter(hourlyWeather[i].time, addDays(currentTime, 1))) {
      hourlyWeather.splice(i - 1);
      break;
    }
  }

  // header
  const title = document.createElement("h2");
  title.textContent = "Hourly Weather";

  // hourly forecast
  const div = document.createElement("div");
  hourlyWeather.forEach((hourlyForecast) => {
    const forecast = document.createElement("div");
    const time = document.createElement("p");
    const icon = document.createElement("img");
    const condition = document.createElement("p");

    icon.style.height = "3rem";
    icon.style.width = "3rem";

    if (
      hourlyForecast.condition === "sunrise" ||
      hourlyForecast.condition === "sunset"
    ) {
      time.textContent = format(hourlyForecast.time, "hh:mm a");
      if (hourlyForecast.condition === "sunrise") {
        icon.src = sunrisePng;
      } else {
        icon.src = sunsetPng;
      }
      condition.textContent =
        hourlyForecast.condition.charAt(0).toUpperCase() +
        hourlyForecast.condition.slice(1);

      forecast.appendChild(time);
      forecast.appendChild(icon);
      forecast.appendChild(condition);
    } else {
      const temp_c = document.createElement("p");
      const temp_f = document.createElement("p");

      time.textContent = format(hourlyForecast.time, "hh:mm a");
      icon.src = `http:${hourlyForecast.conditionIcon}`;
      condition.textContent = hourlyForecast.condition;
      temp_c.textContent = `${hourlyForecast.temp_c} C`;
      temp_f.textContent = `${hourlyForecast.temp_f} F`;

      temp_c.classList.add("metric");
      temp_f.classList.add("imperial");

      forecast.appendChild(time);
      forecast.appendChild(icon);
      forecast.appendChild(condition);
      forecast.appendChild(temp_c);
      forecast.appendChild(temp_f);
    }

    div.appendChild(forecast);
  });

  hourly.appendChild(title);
  hourly.appendChild(div);
}

function convertTo24(time) {
  const meridianArray = time.split(" ");
  const timeArray = meridianArray[0].split(":");

  const meridian = meridianArray[1];
  const hour = timeArray[0];
  const minutes = timeArray[1];

  if (meridian === "AM") {
    return `${hour}:${minutes}`;
  } else {
    return `${Number(hour) + 12}:${minutes}`;
  }
}
export default generateHourly;
