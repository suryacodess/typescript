document.querySelector(".form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameInput = document.querySelector("#nameInput") as HTMLInputElement;
  let emailInput = document.querySelector("#emailInput") as HTMLInputElement;
  let nameInputValue = nameInput.value;
  let emailInputValue = emailInput.value;
  console.log(nameInputValue, emailInputValue);
});
