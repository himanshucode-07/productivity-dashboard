export class WaterIntake {
  constructor() {
    this.minusBtn = document.querySelector(".minus-btn");
    this.plusBtn = document.querySelector(".plus-btn");
    this.span = document.querySelector(".count");
    this.resetBtn = document.querySelector(".resetBtn");
    this.count = 0;
  }
  init() {
    this.plusBtn.addEventListener("click", () => {
      this.count++;
      this.span.innerText = this.count;
    });
    this.minusBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
      }
    });
    this.resetBtn.addEventListener("click", () => {
      count = 0;
      span.innerText = 0;
      console.log("Reset button clicked");
    });
  }
}
