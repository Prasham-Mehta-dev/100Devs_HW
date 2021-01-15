let num = document.querySelector("#result");

function display(val) {
  // num.value = num.value + " " + val;
  num.value += val;
}

function calculate() {
  let x = num.value;
  let y = eval(x);
  num.value = y;
}

function clr() {
  num.value = "";
}