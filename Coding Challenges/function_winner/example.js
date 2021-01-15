let num = Number(prompt("Enter a number:"));
let str = prompt("Enter any word:");

function wordLengthMultiplyNum(a,b){
  let strLength = b.length;
  if (a * strLength > 100){
    alert("Winner");
  }else{
    alert(`The length of the word is ${strLength} and ${strLength}*${a} (${a*strLength}) is less than 100`);
  }
}
console.log(wordLengthMultiplyNum(num, str));