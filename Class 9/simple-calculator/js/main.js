let total = 0

document.querySelector('#pumpkin').addEventListener('mouseover', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.getElementById('butICan').onclick = mul7
document.getElementById('divideAndRule').addEventListener('mouseover', div8)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function mul7(){
  total *= 7
  document.getElementById('placeToPutResult').innerHTML = total
}

function div8(){
  total /= 8
  document.getElementById('placeToPutResult').innerHTML = total
}