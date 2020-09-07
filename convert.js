// select elements

const convertBtn = document.getElementById('btn').addEventListener('click', convertUnits);
const unitOne = document.querySelector('.menu1');
const unitTwo = document.querySelector('.menu2');
const input = document.querySelector('input[type="number"]');
const answerBox = document.getElementById('answerBox');
const answer = document.getElementById('answer');
// convertUnits function

function convertUnits(e) {
    
    let firstSelection = unitOne.value;
    let secondSelection = unitTwo.value;
    let unit = input.value;
    
    if ( firstSelection === "Bits" && secondSelection === "Kilobytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = unit / 1000;
    }
    if ( firstSelection === "Bits" && secondSelection === "Megabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit / 1000) / 1000;
    }
    if ( firstSelection === "Bits" && secondSelection === "Gigabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit / 1000) / 1000) / 1000;
    }
    if ( firstSelection === "Bits" && secondSelection === "Terabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( ( (unit / 1000) / 1000) / 1000) / 1000;
    }
    if ( firstSelection === "Kilobytes" && secondSelection === "Bits" ) {
        answerBox.style.display = "block";
        answer.innerHTML = unit * 1000;
    }
    if ( firstSelection === "Kilobytes" && secondSelection === "Megabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit / 1000);
    }
    if ( firstSelection === "Kilobytes" && secondSelection === "Gigabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit / 1000) / 1000);
    }
    if ( firstSelection === "Kilobytes" && secondSelection === "Terabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( ( (unit / 1000) / 1000) / 1000);
    }
    if ( firstSelection === "Megabytes" && secondSelection === "Bits" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit * 1000) * 1000;
    }
    if ( firstSelection === "Megabytes" && secondSelection === "Kilobytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit * 1000);
    }
    if ( firstSelection === "Megabytes" && secondSelection === "Gigabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit / 1000);
    }
    if ( firstSelection === "Megabytes" && secondSelection === "Terabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit / 1000) / 1000);
    }
    if ( firstSelection === "Gigabytes" && secondSelection === "Bits" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit * 1000) * 1000) * 1000;
    }
    if ( firstSelection === "Gigabytes" && secondSelection === "Kilobytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit * 1000) * 1000);
    }
    if ( firstSelection === "Gigabytes" && secondSelection === "Megabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit * 1000);
    }
    if ( firstSelection === "Gigabytes" && secondSelection === "Terabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit / 1000);
    }
    if ( firstSelection === "Terabytes" && secondSelection === "Bits" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( ( (unit * 1000) * 1000) * 1000) * 1000;
    }
    if ( firstSelection === "Terabytes" && secondSelection === "Kilobytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = ( (unit * 1000) * 1000) * 1000;
    }
    if ( firstSelection === "Terabytes" && secondSelection === "Megabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit * 1000) * 1000;
    }
    if ( firstSelection === "Terabytes" && secondSelection === "Gigabytes" ) {
        answerBox.style.display = "block";
        answer.innerHTML = (unit * 1000);
    }
    setTimeout(convertUnits, 2000);
}


