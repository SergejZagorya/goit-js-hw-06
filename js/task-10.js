function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");

const buttonCreateEl = document.querySelector("button[data-create]");

const buttonDestroyEl = document.querySelector("button[data-destroy]");

const divBoxesEl = document.querySelector("#boxes");

// inputEl.addEventListener("click", (event) => {
//   let aaa;
//   aaa = event.currentTarget.value;
//   console.log("aaa1", aaa);
// });

// console.log("aaa2", bbb);

buttonCreateEl.addEventListener("click", () => {
  createBoxes(sss);
  getInputValue();
});
let sss = 0;
const getInputValue = () => {
  sss = inputEl.value;
  console.log("sss1", sss);
  return sss;
};

// console.log("sss2", sss);

function createBoxes(amount) {
  let counter = 1;
  let divValue = 20;
  while (counter <= amount) {
    const createdDiv = document.createElement("div");
    counter += 1;
    divValue += 10;

    createdDiv.style.width = divValue + "px";
    createdDiv.style.height = divValue + "px";
    createdDiv.style.margin = "5px";
    createdDiv.style.backgroundColor = getRandomHexColor();

    divBoxesEl.append(createdDiv);

    buttonDestroyEl.addEventListener("click", (event) => {
      createdDiv.remove();
    });
  }

  console.log("amount", amount);
}
