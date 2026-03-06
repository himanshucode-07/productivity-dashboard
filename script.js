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
let empty = document.querySelector(".empty");

let count = 0;
plusBtn.addEventListener("click", () => {
  count++;
  span.innerText = count;
});

minusBtn.addEventListener("click", () => {
  if(count > 0) {
     count--;
  }
  span.innerText = count;

  resetBtn.addEventListener("click", () => {
    count = 0;
    span.innerText = count;
  }) 

  empty.addEventListener("click", () => {
    count = 0;
    span.innerText = count;
  }
});
