class Console {
  #isVisible = false;
  constructor(isVisible) {
    if (isVisible) {
      this.#isVisible = true;
    }
  }
  console() {
    if (this.#isVisible) {
      const temp = [];
      for (let i in arguments) {
        temp.push(arguments[i]);
      }
      console.log(temp);
    }
  }
}
export { Console };
