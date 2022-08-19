const buttonNext = document.querySelector(".btn-nxt");
const buttonCheck = document.querySelector(".btn-check");
const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-gvn");
const errorMessage = document.querySelector(".error-message");
const errorImage = document.querySelector(".error-img");
const notesNumber = document.querySelectorAll(".notes");
const availableNotes = document.querySelectorAll(".available-notes");
const enableDisplayOne = document.querySelector(".cash-given");
const enableDisplayTwo = document.querySelector(".table-container");
const returnMoney = document.querySelector(".return-money");
const colorNotes = "#22c55e";


let billTotal, cashReceived, balanceAmount;

buttonNext.addEventListener("click", checkBillValidity);

buttonCheck.addEventListener("click",
    function () {

        setErrorMessage("");
        cashReceived = parseFloat(cashGiven.value);
        checkBillValidity();
        console.log(cashReceived);

        // If user directly enters -ve value in bill Amount
        if (cashReceived === 0) {
            setErrorMessage("Value should be greater than 0");
            errorMessage.style.color = "red";
            errorMessage.style.fontWeight = "bold";
            enableDisplayTwo.style.display = "none";
        } else if (cashReceived > billTotal) {
            balanceAmount = cashReceived - billTotal;
            calculateChange(balanceAmount);
        } else if (cashReceived === billTotal) {
            setErrorMessage("I like you. Have a chocolate 🍫. Now how would you like to pay for it?");
            calculateChange(0);
        } else {
            enableDisplayTwo.style.display = "none";
            setErrorMessage("Ha Ha! nice one, now pay the bill or else I'll shoot you.");
            errorImage.style.display = "block";
        }
    });

function checkBillValidity() {

    setErrorMessage("");
    billTotal = parseFloat(billAmount.value);

    if (billTotal > 0) {
        enableDisplayOne.style.display = "block";
        buttonNext.style.display = "none";
    } else {
        // Also handles if user enters -ve value directly in bill amount after next button is hidden.
        setErrorMessage("Value should be greater than 0");
        cashReceived = 0;
        errorMessage.style.color = "red";
        errorMessage.style.fontWeight = "bold";
        cashGiven.value = "";
        enableDisplayOne.style.display = "none";
        buttonNext.style.display = "block";
    }

}

function setErrorMessage(message) {
    errorMessage.innerText = message;
}

function calculateChange(balance) {

    const notesValue = [2000, 500, 100, 20, 10, 5, 1];
    errorImage.style.display = "none";
    unsetColor();
    enableDisplayTwo.style.display = "block";
    returnMoney.innerText = balance;

    for (let i = 0; i < notesNumber.length; i++) {
        const division = Math.trunc(balance / notesValue[i]);
        balance %= notesValue[i];
        notesNumber[i].innerText = division;
        if (division > 0) {
            setColor(i);
        }
    }
}

// To set the color
function setColor(positionOfElement) {
    notesNumber[positionOfElement].style.color = colorNotes;
    notesNumber[positionOfElement].style.fontWeight = "bold";
    availableNotes[positionOfElement].style.color = colorNotes;
    availableNotes[positionOfElement].style.fontWeight = "bold";
}

// to reset the color
function unsetColor() {
    for (let j = 0; j < notesNumber.length; j++) {

        notesNumber[j].style.color = "unset";
        notesNumber[j].style.fontWeight = "unset";
        availableNotes[j].style.color = "unset";
        availableNotes[j].style.fontWeight = "unset";
    }
}