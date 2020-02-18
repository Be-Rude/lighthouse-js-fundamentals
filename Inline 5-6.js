/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", (function laugh(x) {
  var lols = "";
  for (i=0; i<x; i++) {
  lols += "ha";
  }
  return lols + "!";
}));
