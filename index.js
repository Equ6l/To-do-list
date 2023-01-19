// VARIABLES
let toDoContainer = document.querySelector(".thisMonth");
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
  let btn = document.querySelectorAll(".btn");
  let task = {
    text: inputElements[0].value,
    status: btn[0].textContent,
    date: inputElements[1].value,
    time: inputElements[2].value,
  };

  if (task.text == "") {
    alert("You must write something");
  } else {
    db.push(task);
    display();
  }
}

// DISPLAY VALUES
function display() {
  toDoContainer.innerHTML = "";
  for (let i = 1; i < db.length; i++) {
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
  let btn = document.createElement("button");
  btn.classList.add("test");
  btn.textContent = db[i].status;
  btn.addEventListener("click", function () {
    btnState(btn, "visible");
  });
  return btn;
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
  btn.className = "addRemove";
  let btnText = document.createTextNode("-");
  btn.appendChild(btnText);
  btn.setAttribute("style", "background-color:#FE4A49;");
  btn.addEventListener("click", () => {
    console.log(i);
    db.splice(i, 1);
    display();
  });
  return btn;
}

// STATUS BUTTON
let currentButton;
let btnStatus = document.querySelector("button#state");
let tooltipHide = document.querySelector(".tooltip");
tooltipHide.classList.toggle("hide");

function btnState(v, state) {
  if (state == "visible") {
    currentButton = v;
    tooltipHide.style.visibility = "visible";
    tooltipHide.classList.toggle("hide");
  } else if (state == "done") {
    currentButton.textContent = `Done`;
    currentButton.setAttribute("style", "background-color: rgb(84, 199, 84);");
    tooltipHide.classList.toggle("hide");
  } else if (state == "inProcess") {
    currentButton.textContent = `In process`;
    currentButton.setAttribute("style", "background-color: rgb(255, 180, 42);");
    tooltipHide.classList.toggle("hide");
  } else if (state == "blocked") {
    currentButton.textContent = `Blocked`;
    currentButton.setAttribute("style", "background-color: rgb(255, 62, 62);");
    tooltipHide.classList.toggle("hide");
  } else if (state == "grey") {
    currentButton.textContent = `Status`;
    currentButton.setAttribute("style", "background-color:grey");
    tooltipHide.classList.toggle("hide");
  }
}
