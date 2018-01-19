/* 
* Program that takes a number as an upper limit and for all numbers up to that limit
* if n + reverse(n) is an odd number adds to array which it outputs at the end
* doesn't include multiples of 10 e.g. 148 + 841 = 989
*/

// returns reverse number as string
function reverseNumber(number) {
  var str = number.toString();
  return str.split("").reverse().join("");
}

// returns true if number odd
function isOdd(number) {
  return Math.abs(number % 2) == 1;
}

// lists all the reversibles up to the upper limit
function listReversible(upperLimit) {
  for (i = 0; i < upperLimit; i++) { // cycle through all integers
    if (reverseNumber(i).charAt(0) != "0") { // check doesnt begin with 0
      if (isOdd(i + parseInt(reverseNumber(i))) /*&& i + parseInt(reverseNumber(i)) < upperLimit*/) { // not sure if you want sum of reversibles up to upper limit
      	arr.push(i); // add value to array
      }
    }
  }
}

var arr = new Array(); // new array for storing values
var upperLimit = prompt("Input upper limit"); // take user input for upperLimit
listReversible(upperLimit); // call listReversible on upperLimit
for (i = 0; i < arr.length; i++) {
  console.log(i + ":" + arr[i]); // print all reversibles along with their indexes
}