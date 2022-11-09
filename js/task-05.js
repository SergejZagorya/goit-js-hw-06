const inputEl = document.querySelector("input");

const spanEl = document.querySelector("span");

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
});
