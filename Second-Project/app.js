let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#score-user");
let compScore = document.querySelector("#score-comp");
let usersc = 0;
let compsc = 0;
const compchoose = ()=>{
    let option =["paper","rock","scissor"]
    let indx = Math.floor(Math.random()*3);
    return option[indx];
}
const showinner = (winner ,userchoice, compchoice)=>{
if(winner){
 msg.innerText = `congratulation your ${userchoice} beats ${compchoice}`; 
  msg.style.backgroundColor = "green"; 
 userScore.innerText = ++usersc;
   console.log("winner");
} else{
     msg.innerText = `sorry! comp ${compchoice} bets ${userchoice} `;
      msg.style.backgroundColor = "red";
 compScore.innerText = ++compsc;
   console.log("lose");
}
}


const playGame = (userchoice)=>{
let compchoice = compchoose();
console.log(userchoice);
console.log(compchoice);

if(userchoice === compchoice){
     msg.innerText = "The Game is Draw! Try Again";
      msg.style.backgroundColor = "#258276";
    console.log("game drow");
} else {
    let winner = true;
    if(userchoice === "rock"){
      winner = compchoice == "paper" ? false : true;
    }else if(userchoice === "paper"){
         winner = compchoice == "scissor" ? false : true;
    } else {
 winner = compchoice == "rock" ? false : true;
    }
    showinner(winner,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
})
})