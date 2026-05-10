export class WaterIntake {
  constructor() {
    this.minusBtn = document.querySelector(".minus-btn");
    this.plusBtn = document.querySelector(".plus-btn");
    this.span = document.querySelector(".count");
    this.resetBtn = document.querySelector(".resetBtn");
    this.count = 0;
    this.progressCircle = document.querySelector(".water-progress");
    this.maxGlasses = 8;
    this.circumference = 282.7;
  }
  updateArc() {
    const filled = (this.count / this.maxGlasses) * this.circumference;
    const offset = this.circumference - filled;
    this.progressCircle.style.strokeDashoffset = offset;
  }
  init() {
    this.plusBtn.addEventListener("click", () => {
      if (this.count < this.maxGlasses) {
        this.count++;
        this.span.innerText = this.count;
        this.updateArc();
      }
    });
    this.minusBtn.addEventListener("click", () => {
      if (this.count > 0) {
        this.count--;
        this.span.innerText = this.count;
        this.updateArc();
      }
    });
    this.resetBtn.addEventListener("click", () => {
      this.count = 0;
      this.span.innerText = 0;
      this.updateArc();
    });
  }
}