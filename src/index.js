import "./style.css";

const API = "7799c6fbb2534aaa8dc73800242806";
const defaultCity = "dallas";

async function getForecast(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=3`
    );
    if (response.status !== 200) {
      const errorData = await response.json();
      printError(errorData);
      throw new Error(errorData);
    }
    const data = await response.json();
    console.log(data);
    processJson(data);
  } catch (err) {
    console.error(`${err}`);
  }
}

function processJson(data) {
  // details today
  console.log(`Location: ${data.location.region}, ${data.location.country}`);
  console.log(`Date and Time: ${data.location.localtime}`);

  console.log(`Condition: ${data.current.condition.text}`);

  console.log(
    `Temperature: F - ${data.current.temp_f} C - ${data.current.temp_c}`
  );
  console.log(
    `Wind: mph - ${data.current.wind_mph} km ${data.current.wind_km} Direction: ${data.current.wind_dir}`
  );

  console.log(`Humidity: ${data.current.humidity}%`);

  if (data.current.is_day) {
    console.log("day");
  } else {
    console.log("night");
  }

  // forecast details
  console.log("Forecast:");
  const forecast = data.forecast.forecastday;
  for (const day of forecast) {
    console.log(`Date: ${day.date}`);

    console.log(`Condition: ${day.day.condition.text}`);

    console.log(
      `Temperature F: Avg - ${day.day.avgtemp_f} High - ${day.day.maxtemp_f} Low - ${day.day.mintemp_f}`
    );
    console.log(
      `Temperature C: Avg - ${day.day.avgtemp_c} High - ${day.day.maxtemp_c} Low - ${day.day.mintemp_c}`
    );

    console.log(`Chance of rain: ${day.day.daily_will_it_rain}`);
    console.log(`Humidity: ${day.day.avghumidity}%`);
  }
}

function printError(response) {
  console.log(
    `Error Code: ${response.error.code} Message: ${response.error.message}`
  );
}

getForecast(defaultCity);
