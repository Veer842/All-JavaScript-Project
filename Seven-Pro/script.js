let searchBox = document.querySelector(".search input");
let seachBtn  = document.getElementById("btn");
let contFile  = document.querySelector(".containt");
let recipebox = document.querySelector(".rapClass");
let recipeContant = document.querySelector(".rapRecipe");
let deletBtn  = document.querySelector(".rapClass button");

//Unorderd List function
let listItem = (meal)=>{
    let Items = '';
    for(let i=1; i<=20; i++){
         let ingredient = meal[`strIngredient${i}`] ;
         if(ingredient){
            let measure = meal[`strMeasure${i}`];
            Items += `<li>${measure} ${ingredient}</li>`
         }
         else{
            break;
         }
    }
   return Items;
}
// recipes showing function onclick search button
let showRecipes = async()=>{
    contFile.innerHTML = `<h1> Fetching Data...... </h1>`;
    try {
        
   
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox.value}`);
     let data = await response.json();
     console.log(data)
    contFile.innerText = "";
     data.meals.forEach(meal=>{
        let div = document.createElement("div");
        div.classList.add("cards");
        div.innerHTML = `
         <img src="${meal.strMealThumb}" />
         <h2>${meal.strMeal}</h2>
          <h3> ${meal.strArea}</h3>
           <h3> ${meal.strCategory}</h3>
        
        `
        let recipebtn = document.createElement("button");
        recipebtn.textContent = "ShowRecipe";
        div.appendChild(recipebtn);
        contFile.appendChild(div);

        recipebtn.addEventListener("click",()=>{ 
           recipeContant.innerHTML=`
           <h1>${meal.strMeal}</h1>
           <ul>${listItem(meal)}</ul>
           <h3><span>Introctions:</span> ${meal.strInstructions}</h3>
        `  
         recipebox.style.display = "block";
        })
        deletBtn.addEventListener("click",()=>{
               recipebox.style.display = "none";
        })
     })
     } catch (e) {
        contFile.innerHTML = `<h1> Fetching Error...... </h1>`;
    }
     
}

seachBtn.addEventListener("click",(e)=>{
    e.preventDefault();
     showRecipes();    
})