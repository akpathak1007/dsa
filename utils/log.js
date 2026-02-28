import { randomUUID } from "crypto";

class Performance {
  #start = performance.now();
  #identifier = [];
  constructor(identifier) {
    this.#identifier.push(identifier);
    console.log("START", identifier, this.#getTime());
  }
  #getTime() {
    const time = performance.now() - this.#start;
    const unit = time > 1000 ? "sec" : "ms";
    if (unit === "sec") {
      const temp = time / 1000;
      return `${temp.toFixed(3)} ${unit}`;
    } else {
      return `${time.toFixed(3)} ${unit}`;
    }
  }
  startLog(identifier) {
    const temp = identifier ?? randomUUID();
    this.#identifier.push(temp);
    console.log("START ", temp, this.#getTime());
  }
  endLog() {
    console.log("END ", this.#identifier.pop(), this.#getTime());
  }
}

export default Performance;
