let titulo = document.querySelector("#title");
let thumbnail = document.querySelector("#thumbnail");
let video = document.querySelector("#youtubeVideo");
let instructions = document.querySelector("#instructions");
let ingredients = document.querySelector("#ingredients");
let recipe = document.querySelector("#recipe");
recipe.style.display = "none";
window.onload = generateRecipe;

function generateRecipe() {
    recipe.style.display = "none";
    titulo.innerText = "";
    thumbnail.src = "";
    video.src = "";
    instructions.innerText = "";
    ingredients.innerHTML = "";
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(async(data) => {
        meal = (await data.json()).meals[0];
        console.log(meal);
        titulo.innerText = meal.strMeal;
        for (let i = 1; i <= 20; i++) {
            if (meal["strIngredient" + i] != "" && meal["strIngredient" + i] != null) {
                ingredients.innerHTML += "<li>" + meal["strIngredient" + i] + "</li>";
            }
        }
        thumbnail.src = meal.strMealThumb;
        video.src = "https://www.youtube.com/embed/" + meal.strYoutube.split("v=")[1];
        instructions.innerText = meal.strInstructions;

    }).finally(() => {
        recipe.style.display = "block";
    });
}