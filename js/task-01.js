const itemEl = document.querySelectorAll(".item");

console.log("Number of categories:", itemEl.length);

for (let i = 0; i < itemEl.length; i += 1) {
  const elem = itemEl[i];

  console.log("Category:", elem.querySelector("h2").textContent);
  console.log("Elements:", elem.querySelectorAll("li").length);
}
