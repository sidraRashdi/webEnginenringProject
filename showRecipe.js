// let recipes = JSON.parse(localStorage.getItem("fav"));
// let container = document.querySelector(".container");
// recipes.forEach((element) => {
//   let card = document.createElement("div");
//   card.className = "card";
//   container.appendChild(card);
//   let image = document.createElement("img");
//   card.appendChild(image);
//   let recipename = document.createElement("div");
//   recipename.className = "recipeName";
//   card.appendChild(recipename);
//   image.src = element.image;
//   recipename.textContent = element.Name;
//   let btn = document.createElement("button");
//   btn.className = "btn";
//   btn.textContent = "share";
//   card.appendChild(btn);

//   btn.addEventListener("click", () => {
//     showShareModal(element.Name);
//   });
// });
// Retrieve recipes from localStorage and display them
let recipes = JSON.parse(localStorage.getItem("fav"));
let container = document.querySelector(".container");

recipes.forEach((element) => {
  let card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);

  let image = document.createElement("img");
  card.appendChild(image);
  let recipename = document.createElement("div");
  recipename.className = "recipeName";
  card.appendChild(recipename);

  image.src = element.image;
  recipename.textContent = element.Name;

  let btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "Share";
  card.appendChild(btn);

  // Add event listener to share button
  btn.addEventListener("click", () => {
    showShareModal(element.Name);
  });
});

// Function to show the share modal with options
function showShareModal(recipeName) {
  const shareModal = document.getElementById("shareModal");
  const shareOptions = document.getElementById("shareOptions");

  shareOptions.innerHTML = `
        <p>Share ${recipeName} via:</p>
        <button onclick="shareRecipe('${recipeName}', 'Facebook')">Facebook</button>
        <button onclick="shareRecipe('${recipeName}', 'Twitter')">Twitter</button>
        <button onclick="shareRecipe('${recipeName}', 'Email')">Email</button>
    `;

  shareModal.style.display = "block";

  // Close the modal when the close button or outside of the modal is clicked
  document.querySelector(".close").onclick = () => {
    shareModal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == shareModal) {
      shareModal.style.display = "none";
    }
  };
}

// Function to handle the sharing of the recipe
function shareRecipe(recipeName, platform) {
  let shareURL;
  const currentURL = window.location.href; // Use current page URL

  switch (platform) {
    case "Facebook":
      shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentURL
      )}&quote=${encodeURIComponent(recipeName)}`;
      break;
    case "Twitter":
      shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentURL
      )}&text=${encodeURIComponent(recipeName)}`;
      break;
    case "Email":
      shareURL = `mailto:?subject=${encodeURIComponent(
        recipeName
      )}&body=${encodeURIComponent("Check out this recipe: " + currentURL)}`;
      break;
  }

  window.open(shareURL, "_blank");
}
