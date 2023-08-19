let num1 = document.getElementById("first-num").value;

let num2 = document.getElementById("second-num").value;

let result = document.getElementById("result");

let multiply = document.getElementById("multiply");

let divide = document.getElementById("divide");

let subtract = document.getElementById("subtract");

let add = document.getElementById("add");

add.addEventListener("click", function () {
  let num1 = document.getElementById("first-num").value;

  let num2 = document.getElementById("second-num").value;

  if (num1 + num2) {
    let sum = parseInt(num1) + parseInt(num2);
    result.innerHTML = "Your total is " + `${sum}`;
  }
});

subtract.addEventListener("click", function () {
  let num1 = document.getElementById("first-num").value;

  let num2 = document.getElementById("second-num").value;

  if (num1 - num2) {
    let sum = parseInt(num1) - parseInt(num2);
    result.innerHTML = "Your total is " + `${sum}`;
  }
});

multiply.addEventListener("click", function () {
  let num1 = document.getElementById("first-num").value;

  let num2 = document.getElementById("second-num").value;

  if (num1 * num2) {
    let sum = parseInt(num1) * parseInt(num2);
    result.innerHTML = "Your total is " + `${sum}`;
  }
});

divide.addEventListener("click", function () {
  let num1 = document.getElementById("first-num").value;

  let num2 = document.getElementById("second-num").value;

  if (num1 / num2) {
    let sum = parseInt(num1) / parseInt(num2);
    result.innerHTML = "Your total is " + `${sum}`;
  }
});
