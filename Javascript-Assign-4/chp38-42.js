document.write("<br><br>-----------Power function---------<br>")
function power(a, b) {
    var OP = Math.pow(a, b);
    return OP;
  }
  var base = 2;
  var exponent = 3;
  var OP = power(base, exponent);
 document.write('Base : '+ base+ '<br>Exponent : '+ exponent + "<br>Result : " +OP);
//----------------------------------------------------------------------
document.write("<br><br>-----------To check leap year---------<br>")
function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true; // It's a leap year
    } else {
      return false; // It's not a leap year
    }
  }
  
 
  var inputYear = prompt("Enter any year to check if it's leap or not.");
  var isLeap = isLeapYear(inputYear);
  
  if (isLeap) {
    document.write(inputYear + " is a leap year.");
  } else {
    document.write(inputYear + " is not a leap year.");
  }
  
 //----------------------------------------------------------------------
document.write("<br><br>-----------Semi Parameter---------<br>")
function calculateSemiPerimeter(a, b, c) {
    var semiPerimeter = (a + b + c) / 2;
    return semiPerimeter;
  }
  function calculateTriangleArea(a, b, c) {
    var semiPerimeter = calculateSemiPerimeter(a, b, c);
    var area = semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c);
    return area;
  }
  var sideA = 5;
  var sideB = 6;
  var sideC = 7;
  document.write("Value of side A: ",sideA)
  document.write("<br>Value of side b: ",sideB)
  document.write("<br>Value of side c: ",sideC)
  var areaOfTriangle = calculateTriangleArea(sideA, sideB, sideC);
document.write("<br>The area of triangle is : "+areaOfTriangle);  
  
//==============================================================
document.write("<br><br>-----------Function to calculate average and percentage---------<br>")
// Function to calculate the average of marks
function Average(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  
  // Function to calculate the percentage of marks
  function Percentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalMarksObtained = subject1 + subject2 + subject3;
    var percentage = (totalMarksObtained / totalMarks) * 100;
    return percentage;
  }
  
  // Main function to receive marks and display results
  function mainFunction() {
    var subject1Marks = prompt("Enter marks obtained in subject 1:");
    var subject2Marks = prompt("Enter marks obtained in subject 2:");
    var subject3Marks = prompt("Enter marks obtained in subject 3:");
  
    var averageMarks = Average(subject1Marks, subject2Marks, subject3Marks);
    var percentageMarks = Percentage(subject1Marks, subject2Marks, subject3Marks);
  
    document.write("Average Marks: " + averageMarks);
    document.write("<br>Percentage Marks: " + percentageMarks+ "%");
  }
  mainFunction()
  //------------------------------------------------------------------
  document.write("<br><br>-----------Function to remove vowels---------<br>")
  function deleteVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var out = "";
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence.charAt(i);
      if (vowels.indexOf(char) === -1) {
        out += char;
      }
    }
    return out;
  }
  var enter = prompt("Enter a sentence (up to 25 characters):");
  if (enter.length > 25) {
    document.write("Invalid input. The sentence should not exceed 25 characters.");
  } else {
    var modifiedSentence = deleteVowels(enter);
    document.write("Sentence without vowels: " + modifiedSentence);
  }
  
 //------------------------------------------------------------------
  document.write("<br><br>-----------Function to calculate stress---------<br>")
// Function to convert kilometers to meters
function convertToMeters(kilometers) {
    var meters = kilometers * 1000;
    return meters;
  }
  
  // Function to convert kilometers to feet
  function convertToFeet(kilometers) {
    var feet = kilometers * 3280.84;
    return feet;
  }
  
  // Function to convert kilometers to inches
  function convertToInches(kilometers) {
    var inches = kilometers * 39370.1;
    return inches;
  }
  
  // Function to convert kilometers to centimeters
  function convertToCentimeters(kilometers) {
    var centimeters = kilometers * 100000;
    return centimeters;
  }
  
  var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities (in kilometers):"));
  
  var distanceInMeters = convertToMeters(distanceInKilometers);
  var distanceInFeet = convertToFeet(distanceInKilometers);
  var distanceInInches = convertToInches(distanceInKilometers);
  var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
  
  document.write("Distance in meters: " + distanceInMeters + " meters");
  document.write("<br>Distance in feet: " + distanceInFeet + " feet");
  document.write("<br>Distance in inches: " + distanceInInches + " inches");
  document.write("<br>Distance in centimeters: " + distanceInCentimeters + " centimeters");
  