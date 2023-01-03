let choice = ['rock', 'paper', 'scissors']
const playerCount = document.getElementById("playerScore")
const computerCount = document.getElementById("computerScore")
const round = document.getElementById("round")
const update = document.getElementById("update")
const playAgain = document.getElementById("playAgain")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
let playAgainBtn = document.getElementById("playAgainBtn")
let playerScore = 0
let computerScore = 0
let n = 1

if(playerScore < 5 && computerScore < 5){
    playAgainBtn.style.display = "none"
}


const options = document.querySelectorAll(".options");

options.forEach((option) => {option.addEventListener("click", function game() {
        let playerChoice = option.value
        let computerChoice = choice[Math.floor(Math.random()*choice.length)]
      playRound(playerChoice, computerChoice);
  
      if (playerScore === 5 || computerScore === 5) {
        document.querySelector('#rockBtn').disabled = true;
        document.querySelector('#paperBtn').disabled = true;
        document.querySelector('#scissorsBtn').disabled = true;
            
            update.innerText = "Game Over! Final score: " + playerScore + " - " + computerScore
            playAgainBtn.style.display = "initial"
            }})})

    function playRound (playerChoice,computerChoice) {
        playerCount.innerText = playerScore
        computerCount.innerText = computerScore
        if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") 
            { playerScore += 1
                n += 1
            playerCount.innerText = playerScore
            round.innerText = "Round " + n
            update.innerText = "Round won! You've played " + playerChoice + ", computer has played " + computerChoice + "."
        }
               
        else if (playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors") 
            {computerScore += 1
            n += 1
            round.innerText = "Round " + n
            computerCount.innerText = computerScore
            update.innerText = "Round lost. You've played " + playerChoice + ", computer has played " + computerChoice + "."
               
            }
        else {
            n += 1
            round.innerText = "Round " + n
            update.innerText = "Round tied. You've both played " + computerChoice + "!" 
            }}
  
    
playAgainBtn.addEventListener("click", function game(){
    playerScore = 0
    computerScore = 0
    n = 1
    update.innerText = ""
    computerCount.innerText = computerScore
    playerCount.innerText = playerScore
    round.innerText = "Round " + n
    document.querySelector('#rockBtn').disabled = false;
    document.querySelector('#paperBtn').disabled = false;
    document.querySelector('#scissorsBtn').disabled = false;
})


    
        
    

    