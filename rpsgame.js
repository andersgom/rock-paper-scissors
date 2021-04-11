/* 
--Info--


*/

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*choices.length);
    return choices[random];
}