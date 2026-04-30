const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  // Alert if input is empty
  if (taskText === "") {
    alert("Hey! Hey! enter a task first!");
    return;
  }

  // Create elements
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const span = document.createElement("span");
  span.innerText = taskText;
  span.className = "task-text";

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "delete-btn";

  // Toggle completed task event
  checkbox.addEventListener("change", function () {
    span.classList.toggle("completed");
    li.classList.toggle("completed");
  });

  // Delete Task Event with checkbox validation
  delBtn.addEventListener("click", function () {
    // Check if checkbox is NOT checked
    if (!checkbox.checked) {
      alert("⚠️ Please check the checkbox first before deleting!");
      return;
    }
    li.remove();
  });

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
