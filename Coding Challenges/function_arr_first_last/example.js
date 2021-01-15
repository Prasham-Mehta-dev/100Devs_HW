let arr = [];
let numOfValues = Number(prompt("Enter the number of elements in the array"));
sumOfFirstAndLast();

function sumOfFirstAndLast(){
  for (let i = 0; i < numOfValues; i++){
    arr[i] = parseInt(prompt("Enter the value for the array:"));
  }
  console.log(arr[0] + arr[numOfValues - 1]);
}