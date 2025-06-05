let passwordbox = document.querySelector(".passwordbox input");
let btn = document.getElementById("btn");
let Copy = document.querySelector(".passwordbox img")
function passGenerator(){
    let alfa ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num ="0123456789";
    let symbols ="<>?/{[}}|\+=_-@#$%^&*()~";
    let password = alfa + num + symbols;
    let newpassword = "";
   let length = 0;

   while(length != "8"){
  newpassword += password[Math.floor(Math.random() * password.length)];

length++ 
   }
   passwordbox.value = newpassword;
}
btn.addEventListener("click", passGenerator);

function copyPass(){
 passwordbox.select();
 document.execCommand("copy");
}
Copy.addEventListener("click", copyPass);