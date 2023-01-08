const clicker = function closureGenerator() {
  let counterValue = 0;
  const value = document.querySelector("#value");

  return function counter(e) {
    // Чи можна в даному випадку e.currentTarget замінити на this? Ефект виходить той самий.
    switch (e.currentTarget.dataset.action) {
      case "decrement":
        counterValue -= 1;
        value.textContent = counterValue;
        break;
      case "increment":
        counterValue += 1;
        value.textContent = counterValue;
        break;
    }
  };
};

const decrementor = document.querySelector('[data-action="decrement"]');
const incrementor = document.querySelector('[data-action="increment"]');

const onButtonClick = clicker();

decrementor.addEventListener("click", onButtonClick);
incrementor.addEventListener("click", onButtonClick);
