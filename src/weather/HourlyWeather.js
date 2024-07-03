class HourlyWeather {
  #time;
  #condition;
  #conditionIcon;
  #rainChance;
  #temp_f;
  #temp_c;

  constructor(time, condition, conditionIcon, rainChance, temp_f, temp_c) {
    this.#time = time;
    this.#condition = condition;
    this.#conditionIcon = conditionIcon;
    this.#rainChance = rainChance;
    this.#temp_f = temp_f;
    this.#temp_c = temp_c;
  }

  get time () {
    return this.#time;
  }
  get condition () {
    return this.#condition;
  }
  get conditionIcon () {
    return this.#conditionIcon;
  }
  get rainChance () {
    return this.#rainChance;
  }
  get temp_f () {
    return this.#temp_f;
  }
  get temp_c () {
    return this.#temp_c;
  }

  print() {
    console.log(`Time: ${this.#time}`);
    console.log(`Condition: ${this.#condition}`);
    console.log(`Chance of Rain: ${this.#rainChance}`);
    console.log(`Temperature: F - ${this.#temp_f} C - ${this.#temp_c}`);
  }
}

export default HourlyWeather;