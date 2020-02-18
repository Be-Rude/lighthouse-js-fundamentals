/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
  line += "* ";
  }
  return line + "\n";
}

function buildTriangle(height) {
  var row = "";
  for (var j = 1; j <= height; j++) {
  row += makeLine(j);
  }
  return row;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));