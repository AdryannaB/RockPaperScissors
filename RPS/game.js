let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = converToWord(userChoice) + " beats " + converToWord(computerChoice) + ". You WIN!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow") }, 300);
}




function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = converToWord(userChoice) + " loses to " + converToWord(computerChoice) + ". You LOST!"; 
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow") }, 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = converToWord(userChoice) + " equals " + converToWord(computerChoice) + ". It's a DRAW!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("grey-glow") }, 300);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);    
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
    }
}


function main () {
    rock_div.addEventListener('click', function () {
        game("r")
    })
    
    paper_div.addEventListener('click', function () {
        game("p")
    })
    
    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

main();