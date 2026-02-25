function addStudent() {
  let name = document.getElementById("name").value.trim();
  let grade = document.getElementById("grade").value.trim();
  let marks = document.getElementById("marks").value.trim();

  if(name === "" || grade === "" || marks === "") {
    alert("Please fill all fields!");
    return;
  }

  if(marks < 0 || marks > 100) {
    alert("Marks must be between 0 and 100");
    return;
  }

  let table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
  let row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = grade;
  row.insertCell(2).innerText = marks;
  row.insertCell(3).innerHTML = "<button class='delete-btn' onclick='deleteStudent(this)'>Delete</button>";

  document.getElementById("studentForm").reset();
}

function deleteStudent(button) {
  let row = button.parentNode.parentNode;
  row.remove();
}