function addTask() {
  var taskInput = document.getElementById("taskInput"); //retrieves the input element enetered by the user
  var taskList = document.getElementById("taskList"); // retrieves unordered list from html
  var task = taskInput.value; 

  if (task.trim() === "") {
      alert("Please enter a task");
      return;
  }

  var li = document.createElement("li");
  var span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);

  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = task;
  editInput.style.display = "none";
  li.appendChild(editInput);

  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function() {
      span.style.display = "none";
      editInput.style.display = "inline-block";
      editInput.focus();
      editInput.setSelectionRange(0, editInput.value.length);
  };
  li.appendChild(editBtn);

  var saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.className = "edit";
  saveBtn.style.display = "none";
  saveBtn.onclick = function() {
      var newText = editInput.value.trim();
      if (newText !== "") {
          span.innerText = newText;
      }
      span.style.display = "inline";
      editInput.style.display = "none";
  };
  li.appendChild(saveBtn);

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function() {
      taskList.removeChild(li);
  };
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
