    // Task List App 
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTask");
let taskList = document.querySelector("#tasklist");

let tasks =  [];

addBtn.addEventListener("click", () => {
    let value = taskInput.value;

    if(value==="")return;

        tasks.push({
        id: Date.now(),
        text: value,
        completed: false
    });


    let li = document.createElement("li");
    li.innerText = value;

     taskList.appendChild(li);
     taskInput.value = "";

    //  CheckBox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

        li.appendChild(checkbox);
        checkbox.addEventListener("click", () => {
          if(checkbox.checked){
            li.style.textDecoration = "line-through";
          }else{
            li.style.textDecoration = "none";
          }
        });

  // li → ul
    //  taskList.appendChild(li);

    //  delete button
    let del = document.querySelectorAll("li");
    const deleteBtn = document.createElement("button");
      li.appendChild(deleteBtn); 
      deleteBtn.innerText = "Delete";  
     
      deleteBtn.addEventListener("click", () => {
        li.remove();
      })
});

// Water Intake
let minusBtn = document.querySelector(".minus-btn")
let plusBtn = document.querySelector(".plus-btn")
let span = document.querySelector(".count");
let resetBtn = document.querySelector(".resetBtn");


let count = 0;
plusBtn.addEventListener("click", () => {
  count++;
  span.innerText = count;
});

minusBtn.addEventListener("click", () => {
  if(count > 0) {
     count--;
  }});

  
resetBtn.addEventListener("click", () => {
  count = 0;
  span.innerText = 0;
  console.log("Reset button clicked");
});

// Timer
let timerInput = document.querySelector("#timerInput");
let startTimer = document.querySelector("#startTimer");
let stopTimer = document.querySelector("#stopTimer");
let resetTimer = document.querySelector(".reset");

let timer = null;
let endTime;
startTimer.addEventListener("click", () => {

    let parts = timerInput.value.split(":");

    let hour = Number(parts[0]);
    let minute = Number(parts[1]);
    let second = Number(parts[2]);

    let totalSeconds = hour * 3600 + minute * 60 + second;

    endTime = Date.now() + totalSeconds * 1000;

    clearInterval(timer);

    timer = setInterval(() => {

        let remaining = Math.floor((endTime - Date.now()) / 1000);

        if (remaining <= 0) {
            clearInterval(timer);
            timerInput.value = "00:00:00";
            return;
        }

        let h = Math.floor(remaining / 3600);
        let m = Math.floor((remaining % 3600) / 60);
        let s = remaining % 60;

        h = String(h).padStart(2,"0");
        m = String(m).padStart(2,"0");
        s = String(s).padStart(2,"0");

        timerInput.value = `${h}:${m}:${s}`;

    },1000);
    resetBtn.addEventListener("click", () => {
  clearInterval(timer);
timerInput.value = "00:00:00";
}
);

});

stopTimer.addEventListener("click", () => {
    clearInterval(timer);
});

