function displayCurrentDateAndTime() {
    // Create a new Date object for the current date and time
    var currentDate = new Date();
  
    // Get the date and time components from the Date object
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
    // Display the current date and time in the browser
    document.write("Current Date: " + date + "<br>");
    document.write("Current Time: " + time);
  }
  // Call the function to display the current date and time in the browser
  displayCurrentDateAndTime();

//--------------------------------------------------------------

  function greet(){
    var firstname = prompt("Enter your first name")
    var lastname = prompt("Enter your last name")
    alert("Hello " + firstname + " "+lastname)
  }
greet();
//--------------------------------------------------------------
document.write('<br><br>----Function to add two nums-----<br>')
function addNumbers() {
  var num1 = parseFloat(prompt("Enter the first number to add :"));
  var num2 = parseFloat(prompt("Enter the second number to add :"));

  var sum = num1 + num2;
  return sum;
}
var result = addNumbers();
document.write("The sum of two numbers is: " + result);

//--------------------------------------------------------------
document.write("<br><br>---------Calculator--------<br>")
const number1 = parseFloat(prompt("Enter first num to calculate"));
const number2 = parseFloat(prompt("Enter second num to calculate"));
const operter = prompt("Enter Operetor (either +, -, * or /):");
function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operter == "+") {
    val = add(number1, number2);
}
else if (operter == "-") {
    val = sub(number1, number2);
}
else if (operter == "*") {
    val = mul(number1, number2)
}
else if (operter == "/") {
    val = div(number1, number2);
}

document.write("The result for the two input nums is : " + val)

//--------------------------------------------------------------
 document.write("<br><br>---------Squares the argument--------<br>")
 function sq(number) {
    return number * number;
  }
  var num = 5;
  var square = sq(num);
  document.write("Argument : " +num)
  document.write("<br>Result : "+ square);
  
  //--------------------------------------------------------------
 document.write("<br><br>---------Factorial of a number--------<br>")
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  var num = 5;
  var factorial = factorial(num);
  document.write("Number : " +num)
  document.write("<br>Factorial : "+factorial);

 //--------------------------------------------------------------
 document.write("<br><br>---------Counting--------<br>")
function count(start, end) {
    var result = "";
    for (var i = start; i <= end; i++) {
      result += i + " ";
    }
    document.write(result);
  }
  count(1, 10);
//--------------------------------------------------------------
  document.write("<br><br>---------Right angle triangle.--------<br>")
var base = prompt("Enter the base length:");
var perp = prompt("Enter the perpendicular length:");

function Hypotenuse(base, perp) {
    var hypotenuseSquared = Math.pow(base, 2) + Math.pow(perp, 2);
    var hypotenuse = hypotenuseSquared;
    return hypotenuse;
  }
  var hypotenuse = Hypotenuse(base, perp);
  document.write("Hypotenuse: "+hypotenuse);
//---------------------------------------------------------------  document.write("<br><br>---------Area Of Rectangle--------<br>")
document.write("<br><br>---------Area Of Rectangle--------<br>")
var width = prompt("Enter the width")
var height = prompt("Enter the height")

function AreaOfRectangle(width, height){
    var area = width * height;
    return area;
}
var area = AreaOfRectangle(width, height);
document.write("The area of a rectangle is : "+area)
// AreaOfRectangle(width,height)

//---------------------------------------------------------------  document.write("<br><br>---------Area Of Rectangle--------<br>")
document.write("<br><br>---------Capitalize String--------<br>")
var inputString = prompt("Enter a string:");
function capitalize(str) {
   
    var words = str.split(" ");
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    var capitalizedStr = words.join(" ");
  
    return capitalizedStr;
  }

  var capitalizedString = capitalize(inputString);
 document.write("The string after capitalized: "+capitalizedString); 
  






