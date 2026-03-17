export class Timer {
  constructor() {
    this.timerInput = document.querySelector("#timerInput");
    this.startTimer = document.querySelector("#startTimer");
    this.stopTimer = document.querySelector("#stopTimer");
    this.resetTimer = document.querySelector(".reset");
    this.emptyTimer = document.querySelector(".empty");
    this.task = document.querySelector(".task-complete");

    this.timer = null;
    this.endTime;
  }
  init() {
    this.startTimer.addEventListener("click", () => {

    let parts = this.timerInput.value.split(":");

    let hour = Number(parts[0]);
    let minute = Number(parts[1]);
    let second = Number(parts[2]);

    let totalSeconds = hour * 3600 + minute * 60 + second;

    this.endTime = Date.now() + totalSeconds * 1000;

    clearInterval(this.timer);

    this.timer = setInterval(() => {

        let remaining = Math.floor((this.endTime - Date.now()) / 1000);

        if (remaining <= 0) {
            clearInterval(this.timer);
            this.timerInput.value = "00:00:00";
            return;
        }

        let h = Math.floor(remaining / 3600);
        let m = Math.floor((remaining % 3600) / 60);
        let s = remaining % 60;

        h = String(h).padStart(2,"0");
        m = String(m).padStart(2,"0");
        s = String(s).padStart(2,"0");

        this.timerInput.value = `${h}:${m}:${s}`;

    },1000);
});

this.stopTimer.addEventListener("click", () => {
    clearInterval(this.timer);
});

this.task.addEventListener("click", () => {
    clearInterval(this.timer);
    this.timerInput.value = "00:00:00";
});
  }
}
