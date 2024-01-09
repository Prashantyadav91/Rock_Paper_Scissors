let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");
const genComChoice = () =>{
    //generate computer choice
    const option =["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random() * 3);
    return option[randomIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw, Play agian..!!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorPara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("User choice = ",userChoice);
    const compChoice = genComChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            //scissors , rock
            userWin = compChoice === "scissors"? false : true;
        }else{
            //rock , paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        //generate user choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});