console.log("Welcome to the Rock, Paper, Scissors game!");

const choices = ['rock', 'paper', 'scissors'];

let human_choice = prompt("Enter your choice (rock, paper, or scissors) : ").toLowerCase();

let computer_choice = Math.floor(Math.random() * choices.length);

console.log("You chose: " + human_choice);
console.log("Computer chose: " + choices[computer_choice]);

        
if (computer_choice === 'rock' && human_choice === 'scissors' || 
    computer_choice === 'paper' && human_choice === 'rock' || 
    computer_choice === 'scissors' && human_choice === 'paper') {
        console.log("you lose!");
} else if (computer_choice === 'rock' && human_choice === 'rock' || 
            computer_choice === 'scissors' && human_choice === 'scissors' || 
            computer_choice === 'paper' && human_choice === 'paper') {
        console.log("It's a tie");
} else {
        console.log("You win!");
}
