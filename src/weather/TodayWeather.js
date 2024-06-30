class TodayWeather {
  #location;
  #country;
  #date;
  #condition;
  #avgtemp_f;
  #avgtemp_c;
  #wind_mph;
  #wind_km;
  #wind_dir;
  #humidity;
  #isDay;
  #sunrise;
  #sunset;

  constructor(
    location,
    country,
    date,
    condition,
    avgtemp_f,
    avgtemp_c,
    wind_mph,
    wind_km,
    wind_dir,
    humidity,
    isDay,
    sunrise,
    sunset
  ) {
    this.#location = location;
    this.#country = country;
    this.#date = date;
    this.#condition = condition;
    this.#avgtemp_f = avgtemp_f;
    this.#avgtemp_c = avgtemp_c;
    this.#wind_mph = wind_mph;
    this.#wind_km = wind_km;
    this.#wind_dir = wind_dir;
    this.#humidity = humidity;
    this.#isDay = isDay;
    this.#sunrise = sunrise;
    this.#sunset = sunset;
  }

  print() {
    console.log(`Location: ${this.#location}, ${this.#country}`);
    console.log(`Date and Time: ${this.#date}`);

    console.log(`Condition: ${this.#condition}`);

    console.log(`Temperature: F - ${this.#avgtemp_f} C - ${this.#avgtemp_c}`);
    console.log(
      `Wind: mph - ${this.#wind_mph} km ${this.#wind_km} Direction: ${this.#wind_dir}`
    );

    console.log(`Humidity: ${this.#humidity}%`);

    if (this.#isDay) {
      console.log("day");
    } else {
      console.log("night");
    }

    console.log(`Sun Set: ${this.#sunset}`);
    console.log(`Sun Rise: ${this.#sunrise}`);
  }
}

export default TodayWeather;
