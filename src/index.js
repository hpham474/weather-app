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
  } catch (err) {
    console.error(`${err}`);
  }
}

function printError(response) {
  console.log(
    `Error Code: ${response.error.code} Message: ${response.error.message}`
  );
}

getCurrentWeather(defaultCity);
