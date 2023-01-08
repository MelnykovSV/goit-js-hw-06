const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput() {
  text.style.fontSize = `${this.value}px`;
}
