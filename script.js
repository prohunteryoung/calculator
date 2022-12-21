function operate(op, a, b) {
  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else if (op === "*") return a * b;
  else if (op === "/") return a / b;
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
function editNumber() {
  displayedNumber = displayedNumber.toString();
  displayedNumber = displayedNumber.slice(0, displayedNumber.length - 1);
  if (displayedNumber.length === 0) displayedNumber = 0;
  displayValue.textContent = displayedNumber;
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
edit.addEventListener("click", editNumber);

let inputs = [];
let operators = [];

// Clear Button
function clearFunction() {
  displayedNumber = 0;
  displayValue.textContent = displayedNumber;
  inputs = [];
  operators = [];
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearFunction);

// Operate Buttons
const plus = document.querySelector(".add");
const minus = document.querySelector(".sub");
const mult = document.querySelector(".multiply");
const div = document.querySelector(".divide");
const equal = document.querySelector(".equal");

function storeInput() {
  inputs.push(displayedNumber);
  displayedNumber = 0;
}

function inputOperator(operator) {
  operators.push(operator);
}

function plusFunction() {
  inputOperator("+");
  storeInput();
  statusUpdate();
}

plus.addEventListener("click", () => {
  plusFunction();
});
minus.addEventListener("click", () => {
  inputOperator("-");
  storeInput();
  statusUpdate();
});
mult.addEventListener("click", () => {
  inputOperator("*");
  storeInput();
  statusUpdate();
});
div.addEventListener("click", () => {
  inputOperator("/");
  storeInput();
  statusUpdate();
});

const calc = [];
function calculate() {
  storeInput();
  yourStatus = calc.join(" ");
  calcStatus.textContent = yourStatus;
}

equal.addEventListener("click", () => {
  calculate();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "1") return displayNumber("1");
  if (e.key === "2") return displayNumber("2");
  if (e.key === "3") return displayNumber("3");
  if (e.key === "4") return displayNumber("4");
  if (e.key === "5") return displayNumber("5");
  if (e.key === "6") return displayNumber("6");
  if (e.key === "7") return displayNumber("7");
  if (e.key === "8") return displayNumber("8");
  if (e.key === "9") return displayNumber("9");
  if (e.key === "0") return displayNumber("0");
  if (e.key === "Escape") return clearFunction();
  if (e.key === "Backspace") return editNumber();

  if (e.key === "+") return plusFunction();
});

// 입력한 값을 배열에 저장하는 것 까지 완료.

// 고쳐야할 것:
// 1. operators 누를 때마다 값이 추가됨 -> 같은 값은 하나만 추가되도록 하기
// 2. Status Update 를 할 때 이전 것 까지 같이 뜸. (바로 리셋되도록 설정하기)
