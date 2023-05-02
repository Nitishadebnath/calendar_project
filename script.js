const calendar = document.getElementById("calendar");

function generateCalendar(year, month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  let html = "<h2>" + monthNames[month - 1] + " " + year + "</h2>";

  html += "<table>";
  html += "<tr>";
  html += "<th>Sun</th>";
  html += "<th>Mon</th>";
  html += "<th>Tue</th>";
  html += "<th>Wed</th>";
  html += "<th>Thu</th>";
  html += "<th>Fri</th>";
  html += "<th>Sat</th>";
  html += "</tr>";

  let date = 1;
  for (let i = 0; i < 6; i++) {
    html += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        html += "<td></td>";
      } else if (date > daysInMonth) {
        break;
      } else {
        let classes = [];
        if (year === currentYear && month === currentMonth && date === currentDay) {
          classes.push("today");
        }
        html += "<td class='" + classes.join(" ") + "'>" + date + "</td>";
        date++;
      }
    }
    html += "</tr>";
  }

  html += "</table>";

  calendar.innerHTML = html;
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1);
