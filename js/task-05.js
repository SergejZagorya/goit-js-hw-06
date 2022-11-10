const inputEl = document.querySelector("input");

const spanEl = document.querySelector("span");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value.length !== 0) {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
