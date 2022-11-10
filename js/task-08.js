const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (value === "") {
      return alert("Все поля должны быть заполнены! ");
    }
    // console.log(`${name}: ${value}`);

    // console.log({
    //   name,
    //   value,
    // });

    console.table({
      name,
      value,
    });
  });

  event.currentTarget.reset();
}
