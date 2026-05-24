export class Timer {
  constructor() {
    this.timerInput = document.querySelector("#timerInput");
    this.startBtn = document.querySelector("#startTimer");
    this.stopBtn = document.querySelector("#stopTimer");
    this.completeBtn = document.querySelector(".task-complete");
    this.timerDisplay = document.querySelector("#timerDisplay");
    this.progressCircle = document.querySelector(".timer-progress");

    this.timer = null;
    this.totalSeconds = 0;
    this.remainingSeconds = 0;
    this.circumference = 282.7;
  }

  updateArc() {
    const progress = this.remainingSeconds / this.totalSeconds;
    const offset = this.circumference * (1 - progress);
    this.progressCircle.style.strokeDashoffset = offset;
  }

  updateDisplay() {
    const m = Math.floor(this.remainingSeconds / 60);
    const s = this.remainingSeconds % 60;
    this.timerDisplay.innerText = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  reset() {
    clearInterval(this.timer);
    this.timer = null;
    this.remainingSeconds = this.totalSeconds;
    this.progressCircle.style.strokeDashoffset = 0;
    this.updateDisplay();
  }

  init() {
    this.startBtn.addEventListener("click", () => {
      const minutes = Number(this.timerInput.value);
      if (!minutes || minutes < 1) return;

      this.totalSeconds = minutes * 60;
      this.remainingSeconds = this.totalSeconds;
      this.progressCircle.style.strokeDashoffset = 0;
      this.updateDisplay();

      clearInterval(this.timer);

      this.timer = setInterval(() => {
        this.remainingSeconds--;
        this.updateDisplay();
        this.updateArc();

        if (this.remainingSeconds <= 0) {
          clearInterval(this.timer);
          this.timerDisplay.innerText = "Done!";
          this.progressCircle.style.strokeDashoffset = this.circumference;
        }
      }, 1000);
    });

    this.stopBtn.addEventListener("click", () => {
      clearInterval(this.timer);
      this.timer = null;
    });

    this.completeBtn.addEventListener("click", () => {
      clearInterval(this.timer);
      this.timer = null;
      this.remainingSeconds = 0;
      this.timerDisplay.innerText = "00:00";
      this.progressCircle.style.strokeDashoffset = this.circumference;
    });
  }
}