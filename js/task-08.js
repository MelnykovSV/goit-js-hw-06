const loginForm = document.querySelector(".login-form");

function onLoginFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("All fields must be filled!");
    return;
  }

  const formData = {};
  formData[formElements.email.name] = formElements.email.value;
  formData[formElements.password.name] = formElements.password.value;
  console.log(formData);
  e.currentTarget.reset();
}

// function onLoginFormSubmit1(e) {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);
//   const result = {};

//   for (const item of [...formData]) {-
//     if (item[1] === "") {
//       alert("All fields must be filled!");
//       return;
//     }
//     result[item[0]] = item[1];
//   }

//   console.log(result);
//   e.currentTarget.reset();
// }

loginForm.addEventListener("submit", onLoginFormSubmit);
