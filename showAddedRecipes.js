// console.log(JSON.parse(localStorage.getItem("rec")));
let recipes = JSON.parse(localStorage.getItem("rec"));
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let heading1 = document.getElementById("heading-1");
let instruction = document.querySelector(".instructions");
let ingredient = document.querySelector(".ingredients");
let image = document.querySelector(".Image");
let fav = document.querySelector(".fav");
let count = -1;
next.addEventListener("click", () => {
  count = (count + 1) % recipes.length;

  heading1.textContent = recipes[count].Name;
  instruction.textContent = recipes[count].instruction;
  ingredient.textContent = recipes[count].ingredient;
  // console.log(typeof recipes[count].image);
  image.src = recipes[count].image;
});
prev.addEventListener("click", () => {
  count == 0
    ? (count = recipes.length - 1)
    : (count = (count - 1) % recipes.length);

  heading1.textContent = recipes[count].Name;
  instruction.textContent = recipes[count].instruction;
  ingredient.textContent = recipes[count].ingredient;
  image.src = recipes[count].image;
});
let favRecipes;
const existRecipes = JSON.parse(localStorage.getItem("fav"));
favRecipes = existRecipes ? existRecipes : [];
document;

fav.addEventListener("click", () => {
  // window.location.href = showRecipe.html;

  alert("added to fav");
  favRecipes.push(recipes[count]);
  console.log(favRecipes);
  localStorage.setItem("fav", JSON.stringify(favRecipes));
});
