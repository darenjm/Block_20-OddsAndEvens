// TODO: this file! :)
const state = {
  numbers: [],
  total: 0,
};

const form = document.querySelector("form");
const input = document.querySelector("#number");
const output = document.querySelector("output");

form.addEventListener("submit", addNumber);


function renderNumbers(numberBank, element) {
  //numberBank [1, 2, 3, 4] --> '1,2,3,4'
  const commaNumberBank = numberBank.toString();
  element.replaceChildren(commaNumberBank);
}




function addNumber(event) {
  //prevent the page from refreshing
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