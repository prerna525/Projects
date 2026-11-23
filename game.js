let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const userScoreParaa = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

}
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText =" Game was Draw. Play again";
    msg.style.backgroundColor = "black";
} ;

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you wins");
        msg.innerText = 'You Win!'
        msg.style.backgroundColor = "green";
        
    }else{
        computerScore++;
        userScoreParaa.innerText=computerScore;
        console.log("computer wins");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};
const playgame=(userChoice) =>{
    console.log("user choice = ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice = ",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock' ){
            userWin = computerChoice === 'paper'?false:true;
        }else if(userChoice === 'paper'){
            userWin = computerChoice === 'scissors'?false:true;
        }else{
            userWin = computerChoice === 'rock'?false:true;
        }showWinner(userWin);
    }
};
 
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});