export class StudyHours {
  constructor() {
    this.StudyHours = document.querySelector("#Study-Hours");
    this.SaveBtn = document.querySelector("#Save");
    this.StudyStartedBtn = document.querySelector(".Study-Started");
    this.breakTimeBtn = document.querySelector(".breakTime");
    this.resetSessionBtn = document.querySelector(".reset-session");
  }
  init() {
    this.StudyStartedBtn.addEventListener("click", () => {
      let hours = Number(this.StudyHours.value);
      this.breakTimeBtn.style.display = "block";
    });

    this.resetSessionBtn.addEventListener("click", () => {
      this.StudyHours.value = "";
      this.breakTimeBtn.style.display = "none";
    });
  }
}
