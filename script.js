function add(numbs) {
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
  }
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(op, num1, num2) {
  if (op === "+") displayValue.textContent = add(numbs);
  else if (op === "-") return sub(num1, num2);
  else if (op === "*") return multiply(num1, num2);
  else if (op === "/") return divide(num1, num2);
}

// Display Number
const displayValue = document.querySelector(".display");
let displayedNumber = 0;
displayValue.textContent = displayedNumber;

// Number Buttons
const no1 = document.querySelector(".no-1");
const no2 = document.querySelector(".no-2");
const no3 = document.querySelector(".no-3");
const no4 = document.querySelector(".no-4");
const no5 = document.querySelector(".no-5");
const no6 = document.querySelector(".no-6");
const no7 = document.querySelector(".no-7");
const no8 = document.querySelector(".no-8");
const no9 = document.querySelector(".no-9");
const no0 = document.querySelector(".no-0");
const edit = document.querySelector(".edit");

function displayNumber(n) {
  if (displayedNumber === 0) displayedNumber = "";
  displayedNumber += n;
  displayValue.textContent = displayedNumber;
  displayedNumber = Number(displayedNumber);
}
no1.addEventListener("click", () => displayNumber("1"));
no2.addEventListener("click", () => displayNumber("2"));
no3.addEventListener("click", () => displayNumber("3"));
no4.addEventListener("click", () => displayNumber("4"));
no5.addEventListener("click", () => displayNumber("5"));
no6.addEventListener("click", () => displayNumber("6"));
no7.addEventListener("click", () => displayNumber("7"));
no8.addEventListener("click", () => displayNumber("8"));
no9.addEventListener("click", () => displayNumber("9"));
no0.addEventListener("click", () => displayNumber("0"));
edit.addEventListener("click", () => {
  displayedNumber = displayedNumber.toString();
  displayedNumber = displayedNumber.slice(0, displayedNumber.length - 1);
  if (displayedNumber.length === 0) displayedNumber = 0;
  displayValue.textContent = displayedNumber;
});

// Clear Button
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  displayedNumber = 0;
  displayValue.textContent = displayedNumber;
});

// Operate Buttons
const plus = document.querySelector(".add");
const minus = document.querySelector(".sub");
const mult = document.querySelector(".multiply");
const div = document.querySelector(".divide");
const equal = document.querySelector(".equal");

const inputs = [];
const operators = [];

function storeInput() {
  inputs.push(displayedNumber);
  displayedNumber = 0;
}
function inputOperator(operator) {
  operators.push(operator);
}

const calcStatus = document.querySelector(".status");
let yourStatus = "";

function statusUpdate() {
  for (let i = 0; i < inputs.length; i++) {
    yourStatus += inputs[i];
    yourStatus += operators[i];
  }
  calcStatus.textContent = yourStatus;
}

plus.addEventListener("click", () => {
  storeInput();
  inputOperator("+");
  statusUpdate();
});
minus.addEventListener("click", () => {
  storeInput();
  inputOperator("-");
  statusUpdate();
});
mult.addEventListener("click", () => {
  storeInput();
  inputOperator("*");
  statusUpdate();
});
div.addEventListener("click", () => {
  storeInput();
  inputOperator("/");
  statusUpdate();
});

equal.addEventListener("click", () => {
  inputs.push(displayedNumber);
  console.log(inputs);
  console.log(operators[0], inputs[0], inputs[1]);
  console.log(operate(operators[0], inputs[0], inputs[1]));
});

// 입력한 값을 배열에 저장하는 것 까지 완료.

// 고쳐야할 것:
// 1. operators 누를 때마다 값이 추가됨 -> 같은 값은 하나만 추가되도록 하기
// 2. Status Update 를 할 때 이전 것 까지 같이 뜸. (바로 리셋되도록 설정하기)
