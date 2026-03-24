let taskCard = document.querySelector("#taskCard");
let challenge = document.querySelector("#challenge");
let taskPage = document.querySelector("#taskPage");

taskCard.addEventListener("click", () => {
  challenge.style.display = "none";   // dashboard hide
  taskPage.style.display = "block";   // task page show
});

let backBtn = document.querySelector("#backBtn");

backBtn.addEventListener("click", () => {
  taskPage.style.display = "none";
  challenge.style.display = "block";
});

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

import {StudyHours} from "./Components/StudyHours.js";
let Study = new StudyHours();
Study.init();