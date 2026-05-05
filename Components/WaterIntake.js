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
      if (this.count > 0) {
        this.count--;
        this.span.innerText = this.count;
      }
    });
    this.resetBtn.addEventListener("click", () => {
      this.count = 0;
      this.span.innerText = 0;
    });
  }
}
