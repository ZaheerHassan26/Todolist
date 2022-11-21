let loc = document.getElementById("checkin");
let task = document.getElementById("task");
let logout = document.getElementById("logout");
let previous = document.getElementById("prevloc");
let currentpos = document.getElementById("currloc");
task.addEventListener("click", () => {
  window.location = "webtask.html";
});
logout.addEventListener("click", () => {
  window.location = "Todolist.html";
});

loc.addEventListener(
  "click",
  (position = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    function location(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);

      currentpos.innerHTML = `lat: ${lat}<br> long:${lon}`;

      console.log(currentpos.innerHTML);
    }
    function error() {
      alert("Geocoder failed.");
      loc.addEventListener("dblclick", function () {
        currentpos.innerHTML = "";
        previous.innerHTML = `lat: ${lat}<br> long:${lon};`;
        console.log(previous);
      });
    }
  })
);

document.getElementById("logout").onclick = function () {
  window.location = "Todolist.html";
};
