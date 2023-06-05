var today = new Date();
document.write(today)
//--------------------------------------------------------------
var months = [
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
    "December"
  ];
  var d = new Date();
  var currentMonth = months[d.getMonth()];
  alert("Current month: " + currentMonth + ".");

//-----------------------------------------------------------------
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
var currentDay = days[d.getDay()];
alert("Today is:  " + currentDay + ".");

//--------------------------------------------------------------
var d = new Date();
var dayOfWeek = d.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
  alert("It's Fun day!");
} else {
  alert("It's not Fun day.");
}
//--------------------------------------------------------------

var d = new Date();
var currentDate = d.getDate();
if (currentDate < 16) {
  alert("First fifteen days of the month.");
} else {
  alert("Last days of the month.");
}

//--------------------------------------------------------------
var d = new Date();
var hours = d.getHours();
if (hours < 12) {
  alert("It's AM.");
} else {
  alert("It's PM.");
}
//--------------------------------------------------------------
var startRamadan = new Date('June 18, 2015');
var today = new Date();
var timeDiff = today.getTime() - startRamadan.getTime();
var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert(daysDiff + " days have passed since the start of Ramadan.");
//--------------------------------------------------------------
document.write('<br><br>----Later date-----<br>')
var laterDate = new Date(2020, 11, 0);
document.write("Later date "+laterDate);
//--------------------------------------------------------------
document.write('<br><br>----Seconds since reference date-----<br>')
var referenceDate = new Date(); 
var beginningOf2015 = new Date(2015, 0, 1); 
var elapsedSeconds = Math.floor((beginningOf2015 - referenceDate) / 1000); 
document.write("On reference date " + referenceDate+ "<br>")
document.write(elapsedSeconds + " seconds had passed since beginning of 2015. ");
//--------------------------------------------------------------
document.write('<br><br>----Current and updated time-----<br>')
var currentDate = new Date();
// Set the hours one hour ahead
currentDate.setHours(currentDate.getHours() + 1);
document.write("Current date " + currentDate)
// Display the updated date object in the browser
document.write("<br>1 hour ago, it was " + currentDate);
//------------------------------------------------------------------
document.write('<br><br>----To check birth year-----<br>')
var age = prompt("What is your age?");
var d = new Date();
var currentYear = d.getFullYear();
var birthYear = currentYear - age;
document.write("Your age is " + age)
document.write("<br>Your birth year is " + birthYear + ".");


  