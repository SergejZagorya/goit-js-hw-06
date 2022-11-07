const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  console.log(itemEl);

  listEl.append(itemEl);
}
