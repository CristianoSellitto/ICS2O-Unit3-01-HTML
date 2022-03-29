// Cristiano
// ICS2O-Unit3-01-HTML
// March 29 2022

'use strict'
/**
 * Calculates the area of a trapezoid using the user's inputs.
 */
function calculate() {
  const sidea = parseInt(document.getElementById("sidea").value)
  const sideb = parseInt(document.getElementById("sideb").value)
  const height = parseInt(document.getElementById("height").value)

  document.getElementById("output").innerHTML = "<p>The trapezoid's area is " + (((sidea + sideb) / 2) * height) + "cm²</p>"
}
