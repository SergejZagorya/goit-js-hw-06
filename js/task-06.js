const inputEl = document.querySelector("input");

const dataLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === dataLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
