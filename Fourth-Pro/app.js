let inputs = document.querySelector(".searchbar input");
let ulList = document.querySelector(".ulList");
let btn = document.querySelector(".searchbar button");

btn.addEventListener("click",()=>{
if(inputs.value === ""){
    alert("Please Enter Something")
}else{
    let li = document.createElement("li");
    li.innerHTML = inputs.value ;
    ulList.append(li);
    let span = document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    li.append(span);
}
inputs.value = "";
saveData();
})

ulList.addEventListener("click", (e)=>{
if(e.target.tagName === "LI"){
    e.target.classList.toggle("cercle");
   saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
})

function saveData(){
    localStorage.setItem("data", ulList.innerHTML);
}

let showData = ()=> {
 ulList.innerHTML = localStorage.getItem("data");
}
showData();