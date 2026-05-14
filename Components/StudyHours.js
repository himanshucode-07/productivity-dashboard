export class StudyHours {
  constructor() {
    this.studyHoursInput = document.querySelector("#Study-Hours");
    this.saveBtn = document.querySelector("#Save");
    this.studyStartedBtn = document.querySelector(".Study-Started");
    this.breakTimeBtn = document.querySelector(".breakTime");
    this.resetSessionBtn = document.querySelector(".reset-session");
    this.blocksContainer = document.querySelector("#studyBlocks");
    this.goalEl = document.querySelector("#studyGoal");
    this.timeDisplay = document.querySelector(".study-hours-count");
    this.goalHours = 6;
    this.studiedMinutes = 0;
    this.timerInterval = null;
  }

  renderBlocks() {
    this.blocksContainer.innerHTML = "";
    const totalBlocks = this.goalHours;
    const filledBlocks = Math.floor(this.studiedSeconds / 3600);

    for (let i = 0; i < totalBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("study-block");
      if (i < filledBlocks) {
        block.classList.add("filled");
      }
      this.blocksContainer.appendChild(block);
    }
  }

 updateTimeDisplay() {
  const hours = Math.floor(this.studiedMinutes / 3600);
  const minutes = Math.floor((this.studiedMinutes % 3600) / 60);
  const seconds = this.studiedMinutes % 60;
  this.timeDisplay.innerText = `${hours}h ${minutes}m ${seconds}s`;
}

  init() {
    this.renderBlocks();

    this.saveBtn.addEventListener("click", () => {
      const val = Number(this.studyHoursInput.value);
      if (val >= 1 && val <= 24) {
        this.goalHours = val;
        this.goalEl.innerText = val;
        this.renderBlocks();
      }
    });

    this.studyStartedBtn.addEventListener("click", () => {
      if (this.timerInterval) return;
      this.breakTimeBtn.style.display = "block";
      this.timerInterval = setInterval(() => {
        this.studiedMinutes++;
        this.updateTimeDisplay();
        this.renderBlocks();
      }, 1000);
    });

    this.breakTimeBtn.addEventListener("click", () => {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    });

    this.resetSessionBtn.addEventListener("click", () => {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.studiedMinutes = 0;
      this.studyHoursInput.value = "";
      this.breakTimeBtn.style.display = "none";
      this.updateTimeDisplay();
      this.renderBlocks();
    });
  }
}