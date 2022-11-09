const inputEl = document.querySelector("input");

const titleEl = document.querySelector("span");

inputEl.addEventListener("change", (event) => {
  titleEl.style.fontSize = event.currentTarget.value + "px";
});
