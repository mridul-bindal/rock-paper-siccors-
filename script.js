let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        console.log("Choice was clicked:", choiceid);

        const compchoice = computerchoice();
        console.log("Computer choice:", compchoice);

        const userwin = playgame(choiceid, compchoice);
        showwinner(userwin, choiceid, compchoice);
    });
});

const computerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindex = Math.floor(Math.random() * 3);
    return options[randindex];
};

const playgame = (choiceid, compchoice) => {
    if (choiceid === compchoice) {
        console.log("Game was drawn");
        msg.innerText = "It's a draw!";
        msg.style.backgroundColor = "gray";
        return null; // No winner
    }

    let userwin = true;

    if (choiceid === "rock") {
        userwin = compchoice === "paper" ? false : true;
    } else if (choiceid === "paper") {
        userwin = compchoice === "scissors" ? false : true;
    } else if (choiceid === "scissors") {
        userwin = compchoice === "rock" ? false : true;
    }

    return userwin;
};

const showwinner = (userwin, choiceid, compchoice) => {
    if (userwin === null) {
        return; // Do nothing for a draw
    }

    if (userwin) {
        console.log("You win");
        msg.innerText = `You win! ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore; // Update user score display
    } else {
        console.log("You lose");
        msg.innerText = `You lose! ${compchoice} beats ${choiceid}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore; // Update computer score display
    }
};
