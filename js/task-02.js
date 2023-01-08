const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function addByAppend() {
  const items = [];

  ingredients.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    element.classList.add("item");
    items.push(element);
  });

  list.append(...items);
}

addByAppend();

// function addByInsertAdjacentHTML() {
//   const markup = ingredients
//     .map((item) => `<li class="item">${item}</li>`)
//     .join("");
//   list.insertAdjacentHTML("beforeend", markup);
// }

// addByInsertAdjacentHTML();
