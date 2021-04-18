/* 
--Info--

*/

let counter = [];


function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let youWin = `You win! ${playerSelection} beats ${computerSelection}.`;
    let youLose = `You lose! ${computerSelection} beats ${playerSelection}.`;

    if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        return addPoint('lose') + " " + youLose;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return addPoint('win') + " " + youWin;
    } else if (playerSelection === computerSelection) {
        return addPoint('') + " Tie game!";
    } else {
        return addPoint('') + " The options are Rock, Paper and Scissors"
    }
}

function addPoint(result) {

    if (result === 'win') {
        counter.push('win')
        let winCount = counter.filter(elem => elem === 'win').length;
        let loseCount = counter.filter(elem => elem === 'lose').length;
        return winCount + " - " + loseCount;
    } else if (result === 'lose') {
        counter.push('lose')
        let winCount = counter.filter(elem => elem === 'win').length;
        let loseCount = counter.filter(elem => elem === 'lose').length;
        return winCount + " - " + loseCount;
    } else {
        let winCount = counter.filter(elem => elem === 'win').length;
        let loseCount = counter.filter(elem => elem === 'lose').length;
        return winCount + " - " + loseCount;
    }
}

function yourTurn() {
    let playerSelection = prompt("Choose your weapon:","");
    return playerSelection;
}

function game() {

    let rounds = 0;

    while (rounds<5) {
        console.log(playRound(yourTurn(), computerPlay()));
        rounds++
    }

    if (rounds == 5) {
        let winCount = counter.filter(elem => elem === 'win').length;
        let loseCount = counter.filter(elem => elem === 'lose').length;
        console.log("Final results: " + winCount + " - " + loseCount);
        counter.length = 0;
    }
}