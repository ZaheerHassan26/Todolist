let popup = document.getElementById("popup");
let addtask = document.getElementById("addtask");
let close = document.getElementById("canbtn");
let overlay = document.getElementById("overlay");
let des = document.getElementById("descrip");
let summary = document.getElementById("textarea");
let date = document.getElementById("date");
let incom = document.getElementById("givendata");
let comtask = document.getElementById("completetask");
let reminder = document.getElementById("Reminder");
let Todos = [];
// task button and input clear
document.getElementById("task-icon").onclick = function () {
  popup.classList.add("show");
  overlay.classList.add("active");
  des.value = "";
  summary.value = "";
  date.value = "";
};
// add task button
addtask.addEventListener("click", () => {
  popup.classList.add("show");
  overlay.classList.add("active");
  des.value = "";
  summary.value = "";
  date.value = "";
});
// close button
close.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("active");
});
// logout icon
document.getElementById("logout-icon").onclick = function () {
  window.location = "Todolist.html";
};
// logout button
document.getElementById("logout").onclick = function () {
  window.location = "Todolist.html";
};
// location button
document.getElementById("loc").onclick = function () {
  window.location = "location.html";
};
// enteries to enter the task
document.getElementById("addbtn").onclick = function () {
  if (summary.value == "" || date.value == "" || des.value == "") {
    alert("please add correct credientials");
  } else {
    let task = 0;
    incom.innerHTML = "";
    Todos.push({
      Label: summary.value,
      desc: des.value,
      time: date.value,
    });

    // adding the task and assiging it the location
    Todos.map((item) => {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = `${item.Label}`;
      checkbox.id = `${task}`;
      checkbox.style.width = "15px";
      checkbox.style.height = "15px";
      checkbox.style.marginRight = ".7rem";
      var label = document.createElement("label");
      label.id = `lbl${task}`;
      let time = document.createElement("div");
      let value = document.createTextNode(`⏰${item.time}`);
      time.appendChild(value);
      time.style.fontSize = "13px";
      time.style.marginLeft = "30px";
      time.style.color = "#B9B9BE";
      time.style.marginTop = "2px";

      label.appendChild(document.createTextNode(`${item.Label}`));
      label.appendChild(document.createElement(`br`));
      label.appendChild(time);

      label.appendChild(document.createElement(`br`));

      incom.appendChild(checkbox);
      incom.appendChild(label);
      task += 1;
      // checkbox change place after click
      checkbox.addEventListener("click", (e) => {
        var str = e.target.id;

        const tempCheckBox = document.getElementById(`${str}`);
        console.log(str);
        const tempLbl = document.getElementById(`lbl${str}`);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.height = "15px";
        checkbox.style.marginRight = ".7rem";
        checkbox.style.width = "15px";
        checkbox.checked = "true";
        checkbox.style.accentColor = "#DADADA";

        const node = document.createTextNode(`${item.Label}`);
        const space = document.createElement("div");
        space.style.marginBottom = "10px";
        comtask.appendChild(checkbox);
        comtask.appendChild(node);
        comtask.appendChild(space);

        tempLbl.remove();
        tempCheckBox.remove();
        Todos.splice(str);
      });

      popup.classList.remove("show");
      overlay.classList.remove("active");
      // Reminder set for task

      let today = new Date();
      let reminderdate = new Date(item.time);
      let remindertime = reminderdate - today;

      var alarm = () => {
        reminder.classList.add("show");
        document.getElementById("Label").innerHTML = `${item.Label}`;
        document.getElementById("des").innerHTML = `${item.desc}`;
      };
      if (remindertime >= 0) {
        setTimeout(() => {
          alarm();
        }, remindertime);
        // Reminder remove after skip
        document.getElementById("skip").onclick = function () {
          reminder.classList.remove("show");
        };
      }
    });
  }
};
