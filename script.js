let e = document.getElementById("thisID2");

function buttonOne() {
  document.getElementById("thisID").innerHTML = "Menu A";
  document.getElementById("thisIDA").innerHTML = "Sub-Menu A";
  document.getElementById("thisIDB").innerHTML = "Sub-Menu A (2)";
  document.getElementById("thisID2").innerHTML = "Menu A (2)";
  document.getElementById("thisID2A").innerHTML = "Sub-Menu A";
  document.getElementById("thisID2B").innerHTML = "Sub-Menu A (2)";
}
function buttonTwo() {
  document.getElementById("thisID").innerHTML = "Menu B";
  document.getElementById("thisIDA").innerHTML = "Sub-Menu B";
  document.getElementById("thisIDB").innerHTML = "Sub-Menu B (2)";
  document.getElementById("thisID2").innerHTML = "Menu B (2)";
  document.getElementById("thisID2A").innerHTML = "Sub-Menu B";
  document.getElementById("thisID2B").innerHTML = "Sub-Menu B (2)";
}
function buttonThree() {
  document.getElementById("thisID").innerHTML = "Menu C";
  document.getElementById("thisIDA").innerHTML = "Sub-Menu C";
  document.getElementById("thisIDB").innerHTML = "Sub-Menu C (2)";
  document.getElementById("thisID2").innerHTML = "Menu C (2)";
  document.getElementById("thisID2A").innerHTML = "Sub-Menu C";
  document.getElementById("thisID2B").innerHTML = "Sub-Menu C (2)";
}
var pMinus1Element = document.getElementById("pminus");
var pMinus2Element = document.getElementById("pminus2");
function pmFunction() {
  if (pMinus1Element.innerHTML === "-") {
    pMinus1Element.innerHTML = "+";

  } else {
    pMinus1Element.innerHTML = "-";
    pMinus2Element.innerHTML = "+";
  }
}
function pmFunction2() {
  if (pMinus2Element.innerHTML === "-") {

    pMinus2Element.innerHTML = "+";
  } else {
    pMinus2Element.innerHTML = "-";
    pMinus1Element.innerHTML = "+";
  }
}
