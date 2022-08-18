const buttonNext = document.querySelector(".btn-nxt");
const buttonCheck = document.querySelector(".btn-check");
const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-gvn");
const errorMessage = document.querySelector(".error-message");
const notesNumber = document.querySelectorAll(".notes");
const enableDisplayOne = document.querySelector(".cash-given");
const enableDisplayTwo = document.querySelector(".table-container");


let billTotal, cashReceived, balanceAmount;

buttonNext.addEventListener("click", 
    function() {

        setErrorMessage("");
        billTotal = parseFloat(billAmount.value);

        if (billTotal > 0) {
            enableDisplayOne.style.display = "block";
            buttonNext.style.display = "none";        
        }
        else{
            setErrorMessage("Value should be greater than 0");
        }
});

buttonCheck.addEventListener("click", 
function(){

    setErrorMessage("");
    cashReceived = parseFloat(cashGiven.value);
    billTotal = parseFloat(billAmount.value);

    if (cashReceived  > billTotal) {
        balanceAmount = cashReceived - billTotal;
        calculateChange(balanceAmount);
    }
    else if (cashReceived === billTotal){
        setErrorMessage("I like you. Have a chocolate 🍫. Now how would you like to pay for it?");
    }
    else{
        setErrorMessage("Ha Ha! nice one, now pay the bill or else I'll shoot you.");
    }
});

function setErrorMessage(message) {
    errorMessage.innerText = message;
}

function calculateChange(balance){

    const notesValue = [2000, 500, 100, 20, 10, 5, 1];
    
    for (let i=0; i<notesNumber.length; i++){
        console.log(typeof(notesValue[i]),  notesValue[i]);
    }
}