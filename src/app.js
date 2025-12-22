var _a;
(_a = document.querySelector(".form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameInput = document.querySelector("#nameInput");
    var emailInput = document.querySelector("#emailInput");
    var nameInputValue = nameInput.value;
    var emailInputValue = emailInput.value;
    console.log(nameInputValue, emailInputValue);
});
