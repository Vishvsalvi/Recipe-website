let api_key = `a32145da152bdecc6054fe9f165cfe83`;
let api_id = `fd61871a`;

let container = document.querySelector(".content");
container.innerHTML = `<h2 style="color:black; margin-left:1.4em">Welcome!! To the web</h2>`;
let input = document.querySelector(".input");
let button = document
  .querySelector("button")
  .addEventListener("click", getData);

function getData() {
  let base_url = `https://api.edamam.com/search?q=${input.value}&app_id=${api_id}&app_key=${api_key}&to=12`;
  let html = "";
  fetch(base_url)
    .then((base) => {
      return base.json();
    })
    .then((data) => {
      if (data.count == 0) {
        container.innerHTML = `<h1 style="color:black ;margin-left:1.6em" >Dish not found</h1>`;
      } else {
        data.hits.forEach((element) => {
          let cal = element.recipe.calories.toFixed();
          html += `<div class="card">
                <div class="image">
                    <img src=${element.recipe.image} alt="${element.recipe.label}" class="content-img">
                </div>
                <div class="name">
                    <h3>
                        ${element.recipe.label}
                    </h3>
                </div>
                <div class="calories">
                    Calories: ${cal}
                </div>
                <div class="diet-label">
                    Diet label: ${element.recipe.dietLabels}
                </div>
                <div class="cuisine">
                    Cuisine: ${element.recipe.cuisineType}
                </div>
                <h4>
                    <a href=${element.recipe.url} target="_blank" class="recipe">Recipe</a>
                </h4>
            </div>`;
        });
        container.innerHTML = html;
      }
    });
}
