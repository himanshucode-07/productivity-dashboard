export class Tasklist {
  constructor() {
    this.taskinput = document.querySelector("#taskInput");
    this.tasklist = document.querySelector("#tasklist");
    this.addBtn = document.querySelector("#addTask");
    this.tasks = [];
  }
  init() {
    this.addBtn.addEventListener("click", () => {
      this.addTask();
    });
  }
  addTask() {
    let value = this.taskinput.value;
    if (value === "") return;

    this.tasks.push({
      id: Date.now(),
      text: value,
      completed: false,
    });

    // Step 1: sab pehle banao
    let li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.innerText = value;
    taskText.style.flex = "1";
    taskText.style.paddingLeft = "10px";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Step 2: sahi order mein append karo
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    this.tasklist.appendChild(li);
    this.taskinput.value = "";

    // Step 3: event listeners
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "var(--text-3)";
      } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "var(--text-1)";
      }
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}
