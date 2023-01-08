const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function onChangeColorClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", onChangeColorClick);
