let form = document.querySelector("#form-validation");
let numberA = document.querySelector("#number-a");
let numberB = document.querySelector("#number-b");
const sucessMessage = document.querySelector(".sucess-message");
const errorMessage = document.querySelector(".error-message");
const sameNumberMessage = document.querySelector(".same-number-message");

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (numberA.value > numberB.value) {
    errorMessage.style.display = "block";
    
    sucessMessage.style.display = "none";
    sameNumberMessage.style.display = "none";
  } 

  else if (numberA.value < numberB.value) {
    sucessMessage.style.display = "block";

    errorMessage.style.display = "none";
    sameNumberMessage.style.display = "none";
  } 
  
  else if (numberA.value === numberB.value) {
    sameNumberMessage.style.display = "block";

    sucessMessage.style.display = "none";
    errorMessage.style.display = "none";
  }
});