let n1 = Number(prompt("Enter a number:"));
let n2 = Number(prompt("Enter another number:"));

function division(a,b) {
  let div = a / b;
  return div.toFixed(2);
}

console.log(division(n1,n2));