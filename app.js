const buttons = document.querySelectorAll("button");
const display = document.querySelector("h1");

let calc = [];
let accumulate;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      calc = [];
      display.innerText = "0";
    } else if (value === "=") {
      display.textContent = eval(accumulate);
    } else {
      calc.push(value);
      accumulate = calc.join("");
      display.textContent = accumulate;
    }
  });
});
