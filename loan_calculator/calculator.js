window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
//Within this event listener, it checks if there's a form with the id calc-form. 
// If the form exists, it sets up initial values and adds a submit event listener to the form.
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


//This function retrieves the current values entered by the user in the form fields (loan-amount, loan-years, and loan-rate). 
//It converts these values to numbers using the unary plus operator (+) and returns them as an object.
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// This function initializes the form with default values. It sets the initial loan amount, loan term in years, and interest rate. 
//Then, it calls the update function to calculate and display the initial monthly payment.
function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 }; 
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}



//   This function takes the loan amount, loan term in years, and interest rate as input and calculates the monthly payment using the formula for amortizing loans. 
// It returns the monthly payment amount rounded to 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}


//   This function takes the calculated monthly payment as input and updates the monthly-payment 
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}


function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  
  // If there is a deferment period, calculate the monthly interest payment
  if (values.defermentMonths && values.defermentMonths > 0) {
      const interestOnlyPayment = (monthlyRate * values.amount).toFixed(2);
      return interestOnlyPayment;
  } else {
      // If no deferment period, calculate the regular monthly payment
      return (
          (monthlyRate * values.amount) /
          (1 - Math.pow((1 + monthlyRate), -n))
      ).toFixed(2);
  }
}