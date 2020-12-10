let total = 0
let num = 0
let operator

document.querySelector('#cal_space').innerText = total
document.querySelector('#multiply').addEventListener('click', multiply_num)
document.querySelector('#divide').addEventListener('click', divide_num)
document.querySelector('#add').addEventListener('click', add_num)
document.querySelector('#substract').addEventListener('click', substract_num)
document.querySelector('#percent').addEventListener('click', percent_num)
document.querySelector('#calculate').addEventListener('click', calculate_num)
document.querySelector('#cal_space').addEventListener('click', calspace_num)
document.querySelector('#clear').addEventListener('click', clear_num)
document.querySelector('#one').addEventListener('click', one_num)
document.querySelector('#two').addEventListener('click', two_num)
document.querySelector('#three').addEventListener('click', three_num)
document.querySelector('#four').addEventListener('click', four_num)
document.querySelector('#five').addEventListener('click', five_num)
document.querySelector('#six').addEventListener('click', six_num)
document.querySelector('#seven').addEventListener('click', seven_num)
document.querySelector('#eight').addEventListener('click', eight_num)
document.querySelector('#nine').addEventListener('click', nine_num)
document.querySelector('#zero').addEventListener('click', zero_num)

function multiply_num() {
  return operator = "multiply"
}

function divide_num() {
  return operator = "divide"
}

function add_num() {
  return operator = "add"
}

function substract_num() {
  return operator = "substract"
}
function one_num() {
  num = 1
  calculate_num()
}
function two_num() {
  num = 2
  calculate_num()
}
function three_num() {
  num = 3
  calculate_num()
}
function four_num() {
  num = 4
  calculate_num()
}
function five_num() {
  num = 5
  calculate_num()
}
function six_num() {
  num = 6
  calculate_num()
}
function seven_num() {
  num = 7
  calculate_num()
}
function eight_num() {
  num = 8
  calculate_num()
}
function nine_num() {
  num = 9
  calculate_num()
}
function zero_num() {
  num = 0
  calculate_num()
}

function calculate_num(){
  if(operator === "plus"){
    total += num
    document.querySelector('#cal_space').innerText = num
  }
  else if(operator === 'minus'){
    total -= num
    document.querySelector('#cal_space').innerText = num
  }
  else if(operator === 'multiply'){
    total *= num
    document.querySelector('#cal_space').innerText = num
  } 
  else if(operator === 'divide'){
    total /= num
    document.querySelector('#cal_space').innerText = num
  }
  else if(operator === 'percent'){
    total /= num * 100
  }
  else{
    document.querySelector('#cal_space').innerText = num
    return total = num
  }
}

function clear_num(){
  total = 0
  operator = ''
  document.querySelector('#cal_space').innerText = total
}
