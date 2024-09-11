console.log("Hello World");


function playGame() {
    // Initialize scores
    humanScore = 0;
    computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':");
    }
    
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    // Convert humanChoice to lowercase for case-insensitivity
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

    // Get human and computer choices
    const humanSelection = getHumanChoice();
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    // Play a single round
    playRound(humanSelection, computerSelection);

    // Show the current score after each round
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}

// Announce the final winner
if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
} else if (humanScore < computerScore) {
    console.log("Sorry! The computer won the game!");
} else {
    console.log("It's a tie game!");
}
}

playGame();
