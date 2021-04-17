/* 
--Info--
función: playRound
parámetros: playerSelection computerSelection

-playerSelection toma la elección del jugador y
lo pasa a minusculas.
-computerSelection toma el resultado de computerPlay.

-playRound compara las elecciones y devuelve un resultado.

Si ps = cs hay empate

Piedra && Papel = Pierdes
Papel && Tijeras = Pierdes
Tijeras && Piedra = Pierdes

Piedra && Tijeras = Ganas
Papel && Piedra = Ganas
Tijeras && Papel = Ganas


playerSelection === "rock" && computerSelection === "paper" ||
playerSelection === "paper" && computerSelection === "scissors" ||
playerSelection === "scissors" && computerSelection === "rock"
            return youLose;
playerSelection === "rock" && computerSelection === "scissors" ||
playerSelection === "paper" && computerSelection === "rock" ||
playerSelection === "scisors" && computerSelection === "paper"
            return youWin;
playerSelection === computerSelection
            return tieGame;
else:
            return "The options are Rock, Paper and Scissors";


*/

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return "Tie game!";
    } else {
        return "The options are Rock, Paper and Scissors"
    }
}