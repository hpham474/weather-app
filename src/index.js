import "./style.css";

const API = "7799c6fbb2534aaa8dc73800242806";
const defaultCity = "dallas";

async function getCurrentWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`
    );
    if (response.status !== 200) {
      const errorData = await response.json();
      printError(errorData);
      throw new Error(errorData);
    }
    const data = await response.json();
    console.log(data);
    processJsonCurrent(data);
  } catch (err) {
    console.error(`${err}`);
  }
}

function processJsonCurrent(data) {
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

  if (data.current.is_day){
    console.log("day");
  } else {
    console.log("night");
  }
}

function printError(response) {
  console.log(
    `Error Code: ${response.error.code} Message: ${response.error.message}`
  );
}

getCurrentWeather(defaultCity);
