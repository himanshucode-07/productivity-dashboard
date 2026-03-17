//     // Task List App 
import { Tasklist } from "./Components/tasklist.js";

let taskapp = new Tasklist();
taskapp.init();

// Water Intake
import { WaterIntake } from "./Components/WaterIntake.js";

let waterIntakeApp = new WaterIntake();
waterIntakeApp.init();

// Timer
import { Timer } from "./Components/Timer.js"; 
let Timerapp = new Timer();
Timerapp.init();

// Study Hours
let StudyHours = document.querySelector("#Study-Hours");
let SaveBtn = document.querySelector("#Save");
let StudyStartedBtn = document.querySelector(".Study-Started");
let breakTimeBtn = document.querySelector(".breakTime");
let resetSessionBtn = document.querySelector(".reset-session");
 
StudyStartedBtn.addEventListener("click", () => {
    let hours = Number(StudyHours.value);
    breakTimeBtn.style.display = "block";
});

resetSessionBtn.addEventListener("click", () => {
    StudyHours.value = "";
    breakTimeBtn.style.display = "none";
});
