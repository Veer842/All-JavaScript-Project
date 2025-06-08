let inputbox = document.querySelector(".container input");
let buttons = document.querySelectorAll(".container button");

let store = '';
let opretor = '';
let prestore = 0;
// for display result on input
function display(){
    if(opretor){
        inputbox.value = `${prestore} ${opretor} ${store}`;
    }else{
        inputbox.value = store;
    }
}
// operator function 
let operator = (opreValu)=>{
    if(store == '') {
        return;
    }
    if(prestore !== '' && opretor !== ''){
        calculat();
    }
   
    prestore = store;
    opretor = opreValu;
    store = '';
    display();
    
}

// calculat the value according to operators
let calculat = ()=>{
    let newStore;
    let pre = parseFloat(prestore);
    let curr = parseFloat(store);
    if(isNaN(pre) || isNaN(curr)) return;
    switch(opretor){
        case '+':
             newStore = pre + curr;
             break;
        case '-':
             newStore = pre - curr;
             break; 
        case '*':
             newStore = pre * curr;
             break; 
        case '/':
             newStore = pre / curr;
             break; 
         case '%':
             newStore = pre % curr;
             break;      
        default:
            return;             
    }
 store =  newStore.toString();
    prestore = '';
    opretor = '';
}

//number function for add number
function numbers(num){
    if(num == '.' && store.includes('.')) return;
 store += num;
 display();
}
buttons.forEach((btn)=>{
btn.addEventListener("click",()=>{
    if(btn.className == 'operator'){
            
            if(btn.innerText == "AC"){
                store = "";
                opretor = '';
                prestore = '';
                display();
            }else if(btn.innerText == "DEL"){
                store = store.substring(0,store.length-1);
                display();
            }
            else if(btn.innerText == "."){

               numbers('.');
            }
            else{
                operator(btn.innerText);
            }
}
else if(btn.id == 'equal'){
     calculat();
      display();
}
else if(btn.className == 'number'){
    numbers(btn.innerText);
}

})
})
