import processHour from "../json/processHour";

class ForecastWeather {
  #date;
  #condition;
  #avgtemp_f;
  #avgtemp_c;
  #high_f;
  #high_c;
  #low_f;
  #low_c;
  #humidity;
  #rainChance;
  #hourlyWeather = [];

  constructor(
    date,
    condition,
    avgtemp_f,
    avgtemp_c,
    high_f,
    high_c,
    low_f,
    low_c,
    humidity,
    rainChance,
    hours
  ) {
    this.#date = date;
    this.#condition = condition;
    this.#avgtemp_f = avgtemp_f;
    this.#avgtemp_c = avgtemp_c;
    this.#high_f = high_f;
    this.#high_c = high_c;
    this.#low_f = low_f;
    this.#low_c = low_c;
    this.#humidity = humidity;
    this.#rainChance = rainChance;

    hours.forEach((hour) => {
      const hourWeather = processHour(hour);

      this.#hourlyWeather.push(hourWeather);
    });
  }

  print() {
    console.log(`Date: ${this.#date}`);

    console.log(`Condition: ${this.#condition}`);

    console.log(
      `Temperature F: Avg - ${this.#avgtemp_f} High - ${this.#high_f} Low - ${this.#low_f}`
    );
    console.log(
      `Temperature C: Avg - ${this.#avgtemp_c} High - ${this.#high_c} Low - ${this.#low_c}`
    );

    console.log(`Chance of rain: ${this.#rainChance}`);
    console.log(`Humidity: ${this.#humidity}%`);
  }

  getHourly(index) {
    return this.#hourlyWeather[index];
  }

  printHourly() {
    console.log(this.#hourlyWeather);
  }
}

export default ForecastWeather;
