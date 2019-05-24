const btn = document.getElementById("getCBtn");

btn.addEventListener("click", function() {
  let inpY = document.getElementById("inputYear").value;
  let inpM = document.getElementById("inputMonth").value;

  if (isNaN(inpY) || isNaN(inpM)) {
      alert('Please enter year and month to generate calendar.')
  } else {
    fillCalendar(inpY, inpM);
  }
  
});

function resetCalendar() {
  document.getElementById("title").innerText = "";
  document.getElementById("days").innerHTML = "";
}

function fillCalendar(year, month) {
  resetCalendar();

  let monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "Sebtempbar",
    "October",
    "November",
    "December"
  ];

  let nameOfPickedMonth = monthsNames[month - 1];
  let t = nameOfPickedMonth + " " + year;
  document.getElementById("title").innerText = t;

  let firstD = new Date(year, month - 1, 1);
  let lastD = new Date(year, month, 0);

  let firstDayInWeek = firstD.getDay();
  if (firstDayInWeek == 0) firstDayInWeek = 7;

  let lastDayInWekk = lastD.getDay();
  if (lastDayInWekk == 0) lastDayInWekk = 7;

  let numberOfDays = lastD.getDate();

  let days = [];

  for (let i = 1; i < firstDayInWeek; i++) {
    days.push("");
  }

  for (let day = 1; day <= numberOfDays; day++) {
    days.push(day);
  }

  for (let i = lastDayInWekk; i < 7; i++) {
    days.push("");
  }

  let weeks = [];

  while (days.length > 0) {
    let nextWeek = days.splice(0, 7);
    weeks.push(nextWeek);
  }

  fillCalendarBody(weeks);
}

function fillCalendarBody(weeks) {
  for (let week of weeks) {
    let row = document.createElement("tr");

    for (let day of week) {
      let td = document.createElement("td");
      td.innerText = day;
      row.appendChild(td);
    }

    document.getElementById("days").appendChild(row);
  }
}

window.addEventListener("load", main);

function main() {
  let now = new Date();

  fillCalendar(now.getFullYear(), now.getMonth() + 1);
}
