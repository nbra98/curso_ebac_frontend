let form = document.querySelector("#form-validation");
const sucessMessage = document.querySelector(".sucess-message");
const errorMessage = document.querySelector(".error-message");
const sameNumberMessage = document.querySelector(".same-number-message");

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let numberA = Number(document.querySelector("#number-a").value);
  let numberB = Number(document.querySelector("#number-b").value);

  if (numberA > numberB) {
    errorMessage.style.display = "block"; 
    
    sucessMessage.style.display = "none";
    sameNumberMessage.style.display = "none";
  } 

  else if (numberA < numberB) {
    sucessMessage.style.display = "block";

    errorMessage.style.display = "none";
    sameNumberMessage.style.display = "none";
  } 
  
  else if (numberA === numberB) {
    sameNumberMessage.style.display = "block";

    sucessMessage.style.display = "none";
    errorMessage.style.display = "none";
  }
});
