// REGULAR EXPRESSION (REGEX)

const newRegex = new RegExp("Janja", "i");
const paragraph = "Hello this is janja programmers";
const match = newRegex.test(paragraph);

// FORM Validation

const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{3,}$/i,
  email: /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,7})(\.[a-z]{2,7})?$/,
  password: /^.{8,}$/,
  telephone: /^\+(254)(0|7)\d{8}$/,
};

inputs.forEach((el) => {
  el.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.getAttribute("name")]);
  });
});

function validate(inputEl, regex) {
  if (regex.test(inputEl.value)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
