class TodayWeather {
  #name;
  #location;
  #country;
  #date;
  #condition;
  #conditionIcon;
  #avgtemp_f;
  #avgtemp_c;
  #wind_mph;
  #wind_kph;
  #wind_dir;
  #humidity;
  #isDay;
  #sunrise;
  #sunset;

  constructor(
    name,
    location,
    country,
    date,
    condition,
    conditionIcon,
    avgtemp_f,
    avgtemp_c,
    wind_mph,
    wind_kph,
    wind_dir,
    humidity,
    isDay,
    sunrise,
    sunset
  ) {
    this.#name = name;
    this.#location = location;
    this.#country = country;
    this.#date = date;
    this.#condition = condition;
    this.#conditionIcon = conditionIcon;
    this.#avgtemp_f = avgtemp_f;
    this.#avgtemp_c = avgtemp_c;
    this.#wind_mph = wind_mph;
    this.#wind_kph = wind_kph;
    this.#wind_dir = wind_dir;
    this.#humidity = humidity;
    this.#isDay = isDay;
    this.#sunrise = sunrise;
    this.#sunset = sunset;
  }

  get name () {
    return this.#name;
  }
  get location () {
    return this.#location;
  }
  get country () {
    return this.#country;
  }
  get date () {
    return this.#date;
  }
  get condition () {
    return this.#condition;
  }
  get conditionIcon () {
    return this.#conditionIcon;
  }
  get avgtemp_f () {
    return this.#avgtemp_f;
  }
  get avgtemp_c () {
    return this.#avgtemp_c;
  }
  get wind_mph () {
    return this.#wind_mph;
  }
  get wind_kph () {
    return this.#wind_kph;
  }
  get wind_dir () {
    return this.#wind_dir;
  }
  get humidity () {
    return this.#humidity;
  }
  get isDay () {
    return this.#isDay;
  }
  get sunrise () {
    return this.#sunrise;
  }
  get sunset () {
    return this.#sunset;
  }

  print() {
    console.log(`Location: ${this.#location}, ${this.#country}`);
    console.log(`Date and Time: ${this.#date}`);

    console.log(`Condition: ${this.#condition}`);

    console.log(`Temperature: F - ${this.#avgtemp_f} C - ${this.#avgtemp_c}`);
    console.log(
      `Wind: mph - ${this.#wind_mph} km ${this.#wind_kph} Direction: ${this.#wind_dir}`
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
