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

*/

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

/*
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let youLose = `You lose! "${computerSelection}" beats "${playerSelection}".`;
    let youWin = `You win! "${playerSelection}" beats "${computerSelection}".`;
    let tieGame = "Tie game!"

    switch(playerSelection, computerSelection){
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissors":
        case playerSelection === "scissors" && computerSelection === "rock":
            return youLose;
        case playerSelection === "rock" && computerSelection === "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scisors" && computerSelection === "paper":
            return youWin;
        case playerSelection === computerSelection:
            return tieGame;
        default:
            return "The options are Rock, Paper and Scissors";
    }
}
*/