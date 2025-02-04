// TODO: this file! :)
const state = {
  numbers: [],
  total: 0,
};

const form = document.querySelector("form");
const input = document.querySelector("#number");
const output = document.querySelector("output");

form.addEventListener("submit", addNumber);
