const input = document.querySelector("input");
const createButton = document.querySelector(".create-button");
const destroyButton = document.querySelector(".destroy-button");
const boxesDiv = document.querySelector("#boxes");

const onDivCollectionButtonClick = closureGenerator();

createButton.addEventListener("click", onDivCollectionButtonClick);
destroyButton.addEventListener("click", onDivCollectionButtonClick);

function closureGenerator() {
  let size = 30;
  let divsNumber = 0;

  return (e) => {
    switch (Object.keys(e.currentTarget.dataset)[0]) {
      case "create": {
        const oldDivsNumber = divsNumber;
        const newBoxes = [];

        size += parseInt(input.value) * 10;
        divsNumber += parseInt(input.value);

        for (let i = oldDivsNumber; i < divsNumber; i += 1) {
          const color = getRandomHexColor();
          const element = `<div style="width:${30 + i * 10}px;height:${
            30 + i * 10
          }px;background-color:${color}"></div>`;
          newBoxes.push(element);
        }
        boxesDiv.insertAdjacentHTML("beforeend", newBoxes.join(""));
        return;
      }

      case "destroy": {
        size = 30;
        divsNumber = 0;
        boxesDiv.innerHTML = "";
        return;
      }
    }
  };
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
