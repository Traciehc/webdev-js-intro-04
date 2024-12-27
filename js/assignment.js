"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");
// create a mutable variable called age and do not assign it a value.

let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your code below
if (age >= 18 && age <=20) {
    responseEl.textContent = "You can vote, but you cannot purchase alcohol.";
} else if (age >= 21)  {
    responseEl.textContent = "You can vote and purchase alcohol.";
}else if(age < 18) {
    responseEl.textContent = "You cannot vote and you cannot purchase alcohol."
}
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
