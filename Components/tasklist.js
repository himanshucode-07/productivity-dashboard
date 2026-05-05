    export class Tasklist {
        constructor() {
            this.taskinput = document.querySelector("#taskInput");
            this.tasklist = document.querySelector("#tasklist");
            this.addBtn = document.querySelector("#addTask");
            this.removeBtn = document.querySelector("#remove");
            this.tasks = [];
        }
        init() {
            this.addBtn.addEventListener("click", () => {
                this.addTask();
            });
        }
        addTask() {
            let value = this.taskinput.value;

        if(value==="")return;

            this.tasks.push({
            id: Date.now(),
            text: value,
            completed: false
        });

        this.removeBtn.addEventListener("click", () => {
            console.log("this task is  remove")
        })

        let li = document.createElement("li");
        li.innerText = value;

        this.tasklist.appendChild(li);
        this.taskinput.value = "";

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
        // let del = document.querySelectorAll("li");
        const deleteBtn = document.createElement("button");
        li.appendChild(deleteBtn); 
        deleteBtn.innerText = "Delete";  
        
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });
    }
        }


        // 
        tasklist.addEventListener("click", () => {
  challenge.style.display = "none";   // dashboard hide
  taskPage.style.display = "block";   // task page show
});
