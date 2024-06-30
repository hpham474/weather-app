class HourlyWeather {
  #time;
  #condition;
  #rainChance;
  #temp_f;
  #temp_c;

  constructor(time, condition, rainChance, temp_f, temp_c) {
    this.#time = time;
    this.#condition = condition;
    this.#rainChance = rainChance;
    this.#temp_f = temp_f;
    this.#temp_c = temp_c;
  }

  print() {
    console.log(`Time: ${this.#time}`);
    console.log(`Condition: ${this.#condition}`);
    console.log(`Chance of Rain: ${this.#rainChance}`);
    console.log(`Temperature: F - ${this.#temp_f} C - ${this.#temp_c}`);
  }
}

export default HourlyWeather;