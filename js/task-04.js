const divEl = document.querySelector("div");

const decrBtnEl = divEl.firstElementChild;

const incrBtnEl = divEl.lastElementChild;

const spanEl = document.querySelector("#value");

let spanNumberEl = Number(spanEl.textContent);

decrBtnEl.addEventListener("click", () => {
  spanNumberEl = spanNumberEl -= 1;
  spanEl.textContent = `${spanNumberEl}`;
});

incrBtnEl.addEventListener("click", () => {
  spanNumberEl = spanNumberEl += 1;
  spanEl.textContent = `${spanNumberEl}`;
});
