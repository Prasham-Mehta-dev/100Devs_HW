const n1 = document.querySelector('#num1');
const n2 = document.querySelector('#num2');
const n3 = document.querySelector('#num3');
const result = document.querySelector('#result');
const gif = document.querySelector('#confused_gif');

document.querySelector('#result_btn').addEventListener('click', () =>{
  gif.classList.remove('hidden');
  result.innerText = n1.value * n2.value - n3.value;
});

document.querySelector('#clear_btn').addEventListener('click', ()=>{
  [n1.value, n2.value, n3.value] = ["", "", ""]
  gif.classList.add('hidden');
  result.innerText = "";
});