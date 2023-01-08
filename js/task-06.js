const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(e) {
  if (
    e.currentTarget.value.trim().length ===
      parseInt(e.currentTarget.dataset.length) &&
    !e.currentTarget.classList.contains("invalid")
  ) {
    e.currentTarget.classList.add("valid");
    return;
  }

  if (
    e.currentTarget.value.trim().length ===
      parseInt(e.currentTarget.dataset.length) &&
    e.currentTarget.classList.contains("invalid")
  ) {
    e.currentTarget.classList.replace("invalid", "valid");
    return;
  }
  if (
    e.currentTarget.value.trim().length !==
      parseInt(e.currentTarget.dataset.length) &&
    e.currentTarget.classList.contains("valid")
  ) {
    e.currentTarget.classList.replace("valid", "invalid");
    return;
  }
  e.currentTarget.classList.add("invalid");
}
