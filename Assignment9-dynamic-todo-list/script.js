// table headers
let list_head = ["Status", "Task Title", "Date", "Time", "Action"];

let table, tr;

// tasks head
function tableHead() {

    //creating table 
    table = document.createElement("table");
    console.log(table);

    // setting table id
    table.setAttribute("id", "todo-list");

    // inserting row
    tr = table.insertRow(-1);

    // traversing headings into table th
    list_head.forEach(task_head => {
        let th = document.createElement("th");
        th.innerHTML = task_head;
        tr.appendChild(th);
    });
}

// to-do tasks list
function createTodoList() {

    // get data of input
    let todo_tasks = document.querySelectorAll("input");
    console.log(todo_tasks);

    // insert row
    tr = table.insertRow(-1);

    // add the to-do list into table
    for (let i = -1; i < list_head.length - 1; i++) {
        let td = document.createElement("td");
        td = tr.insertCell(-1);

        if (i == -1) {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("onclick", "doneTask(this)");
            td.appendChild(checkbox);
        }
        else if (i == 3) {
            let button = document.createElement("input");
            button.setAttribute("type", "button");
            button.setAttribute("value", "Delete")
            button.setAttribute("onclick", "deleteTask(this)");
            td.appendChild(button);
        }
        else {
            td.innerHTML = todo_tasks[i].value;
        }
    }

    // append the table into the section
    document.getElementById("to-do-list-table").appendChild(table);
    // visible the to-do list heading
    document.getElementById("heading").style.display="block";
 
}

// deleting task
function deleteTask(task){
    let task_table = document.getElementById("todo-list");  
    task_table.deleteRow(task.parentNode.parentNode.rowIndex);
}

// done task
function doneTask(task){
    task.parentNode.parentNode.style.textDecoration = "line-through";
}

