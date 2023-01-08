const nameField = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

nameField.addEventListener("input", onNameFieldInput);

function onNameFieldInput(e) {
  span.textContent =
    e.currentTarget.value.trim() === "" ? "Anonymous" : e.currentTarget.value;
}
