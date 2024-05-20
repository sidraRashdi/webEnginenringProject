const fileInput = document.getElementById("image");
const previewImage = document.getElementById("imgPreview");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

let recipes;
let existingData = JSON.parse(localStorage.getItem("rec"));
console.log(existingData);
recipes = existingData ? existingData : [];
document
  .getElementById("recipeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    let recipeName = document.getElementById("recipeName").value;
    let ingredients = document.getElementById("ingredients").value;
    let instructions = document.getElementById("instructions").value;
    let imageFile = document.getElementById("image").files[0];

    let recipeDetails = {
      Name: recipeName,
      ingredient: ingredients,
      instruction: instructions,
      image: imageFile.name,
    };
    saveRecipeToSession(recipeDetails);
    recipes.push({
      Name: recipeName,
      ingredient: ingredients,
      instruction: instructions,
      image: imageFile.name,
    });

    localStorage.setItem("rec", JSON.stringify(recipes));
    document.getElementById("recipeName").value = " ";
    document.getElementById("ingredients").value = " ";
    document.getElementById("instructions").value = " ";
    previewImage.style.display = "none";
    window.location.href = window.location.href;
  });
function saveRecipeToSession(recipeDetails) {
  var recipeJSON = JSON.stringify(recipeDetails);
  sessionStorage.setItem("workInProgressRecipe", recipeJSON);
}
function getRecipeFromSession() {
  var recipeJSON = sessionStorage.getItem("workInProgressRecipe");

  if (recipeJSON) {
    var recipeDetails = JSON.parse(recipeJSON);
    return recipeDetails;
  } else {
    return null;
  }
}
window.addEventListener("load", function () {
  var savedRecipe = getRecipeFromSession();

  if (savedRecipe) {
    document.getElementById("recipeName").value = savedRecipe.Name;
    document.getElementById("ingredients").value = savedRecipe.ingredient;
    document.getElementById("instructions").value = savedRecipe.instruction;
  }
});
