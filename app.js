let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");
let playerName = document.querySelector("h3");
let newName = playerName.innerText = prompt("Enter Your Name Here");
// let userName = document.querySelector("#user");
// userName.innerText = newName;

const drawGame = (compChoice) => {
    msg.innerText = `Match is draw ! Computer Choice ${compChoice}`;
    msg.style.background = "#023047";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Won!, Computer choice ${compChoice}`;
        msg.style.background = "green";
        userScore++;
        userScoreCount.innerText = userScore;
    }
    else {
        msg.innerText = `Oops! Computer Won , Computer choice ${compChoice}`;
        msg.style.background = "red";
        compScore++;
        compScoreCount.innerText = compScore;
    }
};
const genCompChoice = () => {
    // Random function
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame(compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") { //computer chioce will be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") { //computer choice will be rock or scissor
            userWin = compChoice === "rock" ? true : false;

        } else { //computer choice will be rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
