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

// greeting
import { greeting } from "./greeting.js";
const Greeting = new greeting();
Greeting.init();