let inputbox = document.querySelector(".mainbox input");
let seachBtn = document.querySelector(".mainbox button");
let contant  = document.querySelector(".containt")

// functon use inside tha search button
let showResult = async (value)=>{
let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
let data = await response.json();
let path = data[0].meanings[0].definitions[0];
let means = data[0].meanings[0];
inputbox.value = "";

contant.innerHTML = `
<h1>Word:- ${data[0].word}</h1>
<p><b>Type:</b> <br>${data[0].meanings[0].partOfSpeech} </p>
<p><b>Defination:</b> <br>${path.definition == undefined ? "Not Found" :path.definition} </p>
<p><b>Example:</b> <br>${path.example == undefined ? "Not Found" :path.example} </p>
<p><b>Ayntonmys:</b> <br></p>
`

if(means.antonyms.length == 0){
     contant.innerHTML += `<p>Not Found</p>`;
  
}else{
   for(let i=0; i<means.antonyms.length; i++){
    contant.innerHTML += `<li>${means.antonyms[i]}</li>`;
   
}
}
contant.innerHTML += `<br><a href="${data[0].sourceUrls}" target="_blank">Read More</a>`;
contant.style.display = "block";
}

seachBtn.addEventListener("click",()=>{
   showResult(inputbox.value);
})

