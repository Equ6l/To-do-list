// DATABASE
let db = [
  {
    text: "",
    status: "",
    date: "",
    time: "",
  },
];

// ADDING TASKS
function addToDo() {
  let inputElements = document.querySelectorAll(".task");
  let task = {
    text: inputElements[0].value,
    status: inputElements[1].value,
    date: inputElements[2].value,
    time: inputElements[3].value,
  };

  if (task.text == "") {
    alert("You must write something");
  } else {
    db.push(task);
    display();
  }
}

// DISPLAY VALUES
let toDoContainer = document.querySelector(".thisMonth");

function display() {
  toDoContainer.innerHTML = "";
  for (let i = 0; i < db.length; i++) {
    let d = document.createElement("div");
    d.setAttribute("style", "padding:1em 0;");
    d.append(task(i), state(i), date(i), time(i), remove(i));
    toDoContainer.appendChild(d);
    console.log(db[i]);
  }
}

function task(i) {
  let input = document.createElement("input");
  input.value = db[i].text;
  return input;
}

function state(i) {
  let input = document.createElement("input");
  input.value = db[i].status;
  return input;
}

function date(i) {
  let input = document.createElement("input");
  input.type = "date";
  input.value = db[i].date;
  return input;
}

function time(i) {
  let input = document.createElement("input");
  input.type = "time";
  input.value = db[i].time;
  return input;
}

// REMOVE
function remove(i) {
  let btn = document.createElement("button");
  let btnText = document.createTextNode("-");
  btn.appendChild(btnText);
  //   btn.innerHTML = "-";
  btn.setAttribute("style", "background-color:#FE4A49;");
  btn.addEventListener("click", () => {
    console.log(i);
    db.splice(i, 1);
    display();
  });
  return btn;
}

// MODIFY
