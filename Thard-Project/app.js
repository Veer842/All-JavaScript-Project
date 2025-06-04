let input = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let img = document.querySelector(".display img");
let dish1 = document.querySelector(".display h1");
let dish2 = document.querySelector(".display h2");
let speed = document.querySelector("#speeds");
let percent = document.querySelector("#percent");
let url = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=4b30ac275bbb4a0ec564f22849364ae1";

const weathers = async ()=>{
     
 url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4b30ac275bbb4a0ec564f22849364ae1`;
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();
    console.log(data);
    dish2.innerText = data.name;
    dish1.innerText = Math.round(data.main.temp)+"°C";
    speed.innerText = data.wind.speed + " km/h";
    percent.innerText = data.main.humidity + "%";

if(input.value == "")
        {
        alert("Please Enter City Name");
     }else if(data.weather[0].main == "Clouds"){
 img.src = "./images/clouds.png"
     }else if(data.weather[0].main == "Clear"){
img.src = "./images/clear.png"
     }else if(data.weather[0].main == "Drizzle"){
img.src = "./images/drizzle.png"
     }else if(data.weather[0].main == "Rain"){
img.src = "./images/rain.png"
     }else if(data.weather[0].main == "Mist"){
img.src = "./images/mist.png"
     }

    input.value = "";
    showreport();
}

btn.addEventListener("click",weathers);

function showreport(){
     document.querySelector(".weather").style.display = "block";
}