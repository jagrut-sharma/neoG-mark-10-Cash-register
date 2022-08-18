const buttonNext = document.querySelector(".btn-nxt");
const buttonCheck = document.querySelector(".btn-check");
const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-gvn");
const errorMessage = document.querySelector(".error-message");
const notesNumber = document.querySelectorAll(".notes");
const enableDisplayOne = document.querySelector(".cash-given");
const enableDisplayTwo = document.querySelector(".table-container");

let billTotal, cashReceived;

buttonNext.addEventListener("click", function() {

    setErrorMessage("");
    billTotal = billAmount.value;

    if (billTotal > 0) {
        enableDisplayOne.style.display = "block";
        buttonNext.style.display = "none";        
    }
    else{
        setErrorMessage("Value should be greater than 0");
    }
});



function setErrorMessage(message) {
    errorMessage.innerText = message;
}