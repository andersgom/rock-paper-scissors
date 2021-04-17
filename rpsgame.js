/* 
--Info--

-Juego de 5 rondas.
-Usa loop o llama playRound 5 veces.
-console.log() los resultados.
-Usa prompt() en playerSelection.

Función counter, con el parámetro result.
-Un array almacena los youWin y youLose.
    if youWin --> Se añade youWin al array
    if else youLose --> Se añade youLose al array
    else --> No se añade nada

-Aprovecha esto:
  let arr = ['a', 'a', 'b', 'g', 'a', 'e'];
      let count = arr.filter(elem => elem === 'a').length;
      console.log(count);
Mira si puedes hacer que cuente ambos (winCount - loseCount)?

-Y haces console.log del contador.

game();

while rounds < 5
playerSelection = prompt("Choose your weapon:","")
result = playRound()
counter(result)
rounds++


}

*/

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
        return youLose;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return youWin;
    } else if (playerSelection === computerSelection) {
        return "Tie game!";
    } else {
        return "The options are Rock, Paper and Scissors"
    }
}

