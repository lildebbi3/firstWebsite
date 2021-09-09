var monthpay, totalpay, interestpay, annualpay;

//clears results of the calculators
function resultClear() {
  document.getElementById("results").textContent =
    "Monthly payment: 00000\nTotal payment: 00000\nInterest payment: 00000\nAnnual payment: 00000  ";
  document.getElementById("yearsInput").value = "";
  document.getElementById("interestInput").value = "";
  document.getElementById("amountInput").value = "";
}

//loan algorithm
function loanCal() {
  let x = document.getElementById("amountInput").value;
  let rate = document.getElementById("interestInput").value;
  let years = document.getElementById("yearsInput").value;
  let months = years * 12;
  rate = rate / 1200;
  var num3 = x * rate / (1 -(Math.pow(1/(1+ rate), months)));//calculates the monthly payment
  var num4 = num3 * months;//calculates the full payment
  //checks if there is No answer.
  if (isNaN(num3)) {
    resultClear();
  } else {
    document.getElementById("results").textContent =
      "Monthly payment: $" +
      num3.toFixed(2) +
      "\nTotal payment: $" +
      num4.toFixed(2) +
      "\nInterest payment: $" +
      (num4 - x).toFixed(2) +
      "\nAnnual payment: $" +
      (num4 /  years).toFixed(2);
  }
}

