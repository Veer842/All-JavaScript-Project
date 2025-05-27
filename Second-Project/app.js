let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const compchoose = ()=>{
    let option =["paper","rock","scissor"]
    let indx = Math.floor(Math.random()*3);
    return option[indx];
}

const showinner = (winner)=>{
if(winner){
    msg.innerText = "congratulation you have WON";
    msg.style.backgroundColor = "green";
    console.log("you are winner");
} else{
    msg.innerText = "Sorry! you have LOSE";
    msg.style.backgroundColor = "red";
console.log("you are looser");
}
}

const playGame = (userchoice)=>{
let compchoice = compchoose();
// console.log(userchoice);
// console.log(compchoice);

if(userchoice === compchoice){
     msg.innerText = "The Game is Draw! Try Again";
      msg.style.backgroundColor = "#258276";
    console.log("game drow");
}else{
    let winner = true;
    if(userchoice === "rock"){
      winner = compchoice ==="papper" ? false : true;
    }else if(userchoice === "paper"){
         winner = compchoice ==="scissor" ? false : true;
    } else {
 winner = compchoice ==="rock" ? false : true;
    }
    showinner(winner);
}
}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
})
})