// TODO: this file! :)
const state = {
  numbers: [],
  oddNumbers: [],
  evenNumbers: [],
  total: 0,
};

const form = document.querySelector("form");
const input = document.querySelector("#number");
const output = document.querySelector("output");
const theTotal = document.querySelector(".theTotal");
const sort1 = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");
const oddOutput = document.querySelector("#oddNumberOutput");
const evenOutput = document.querySelector("#evenNumberOutput");

form.addEventListener("submit", addNumber);
sort1.addEventListener("click", sortOneNumber);
sortAll.addEventListener("click", sortAllNumbers);

// When the user clicks the "Add Number" button, the number they entered into the input field is added to the number bank.
function renderNumbers(numberBank, element) {
  const commaNumberBank = numberBank.toString();
  element.replaceChildren(commaNumberBank);
}

// when a user clicks sort 1 btn, it selects the first index in the array 0 and store it in a variable.

function sortOneNumber() {
  const firstNumber = state.numbers.shift();
  if (firstNumber % 2 !== 0) {
    state.oddNumbers.push(firstNumber);
    renderNumbers(state.oddNumbers, oddOutput);
  } else {
    state.evenNumbers.push(firstNumber);
    renderNumbers(state.evenNumbers, evenOutput);
  }
  console.log(state);
  renderNumbers(state.numbers, output);
}

function sortAllNumbers() {
  for (let i = 0; i < state.numbers.length; i++) {
    const firstNumber = state.numbers[i];
    if (firstNumber % 2 !== 0) {
      state.oddNumbers.push(firstNumber);
      renderNumbers(state.oddNumbers, oddOutput);
    } else {
      state.evenNumbers.push(firstNumber);
      renderNumbers(state.evenNumbers, evenOutput);
    }
  }
  state.numbers = [];
  renderNumbers(state.numbers, output);
}

function addNumber(event) {
  event.preventDefault();

  //get the number from form
  const theNumber = form.elements.number.value;

  //add the number to the `number` array in state if the input is a number
  if (parseInt(theNumber)) {
    state.numbers.push(theNumber);

    //replace the total div with the string values of what's in our `number` array
    renderNumbers(state.numbers, output);
  }

  //clear the form's the input
  form.elements.number.value = null;
}
