const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock"); 

const playersChoice = document.getElementById("players-choice");
const computersChoice = document.getElementById("computers-choice");
const winner = document.getElementById("winner");

function computer(){
    let choice = Math.floor(Math.random()*3);
    let choices = ["Scissors","Paper","Rock"];
    console.log(choices[choice]);
    return choices[choice];

}

scissors.addEventListener("click", () => {
    let choice = computer();
    document.getElementById("players-choice").textContent = `You : Scissors`;
    document.getElementById("computers-choice").textContent = `Computer : ${choice}`;
    win("Scissors",choice);
    
})

paper.addEventListener("click", () => {
    let choice = computer();
    document.getElementById("players-choice").textContent = `You : Paper`;
    document.getElementById("computers-choice").textContent = `Computer : ${choice}`;
    win("Paper",choice);
})

rock.addEventListener("click", () => {
    let choice = computer();
    document.getElementById("players-choice").textContent = `You : Rock`;
    document.getElementById("computers-choice").textContent = `Computer : ${choice}`;
    win("Rock",choice);
})

function win(player,pc){
if(player === pc ){
    winner.textContent = "The winner is : Tie";
    winner.style.color = "Yellow";
} else if((player == "Scissors")&&(pc == "Paper")){
    winner.textContent = "The winner is : You !!"
    winner.style.color = "green";
}else if((player == "Paper")&&(pc == "Rock")){
    winner.textContent = "The winner is : You !!"
    winner.style.color = "green";
}else if ((player == "Rock")&&(pc == "Scissors")){
    winner.textContent = "The winner is : You !!"
    winner.style.color = "green";
}else{
    winner.textContent = "The winner is : The Computer"
    winner.style.color = "red";
}
}
