//Listen for submit button
document.getElementById('loan-form').addEventListener('submit', function(e){
   e. preventDefault();

//Hide results
document.getElementById('results').style.display = 'none';

//Show loader
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResults, 2000);
});

// Calculate resulsts function

function calculateResults(){
 console.log('Calculating...');

//Ui variables
 const amountUI = document.getElementById('amount');
 const interestUI = document.getElementById('interest');
 const yearsUI = document.getElementById('years');
 const monthlyPaymentUI = document.getElementById('monthly-payment');
 const totalPaymentUI = document.getElementById('total-payment');
 const totalInterestUI = document.getElementById('total-interest');

//Calculation
const principal = parseFloat(amountUI.value);
const calculatedInterest = parseFloat(interestUI.value)/100/12;
const calculatedPayments = parseFloat(yearsUI.value)*12;

//Monthly payment

const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest)/(x-1);

if(isFinite(monthly)){
 monthlyPaymentUI.value = monthly.toFixed(2);
 totalPaymentUI.value = (monthly * calculatedPayments).toFixed(2);
 totalInterestUI.value = ((monthly * calculatedPayments)-principal).toFixed(2);
//Show results
 document.getElementById('results').style.display = 'block';

//Hide loader
 document.getElementById('loading').style.display = 'none';
}else{
   showError('Please check your numbers');
}
}

//howError function
function showError(error){

//Hide results
 document.getElementById('results').style.display = 'none';

//Hide loader
 document.getElementById('loading').style.display = 'none';
const errorDiv = document.createElement('div');

//Get elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//Add class
errorDiv.className = 'alert alert-danger';

//Create text node
errorDiv.appendChild(document.createTextNode(error));

//Insert error above heading
card.insertBefore(errorDiv, heading);

//Clear error after 3 seconds
setTimeout(clearError, 3000);
}

//Clera error
function clearError(){
   document.querySelector('.alert').remove();
}
