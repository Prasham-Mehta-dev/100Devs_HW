let arr = ["Peter", "Tony", "Bruce", "Wade", "Deadpool"];

// function namePosition(){
//   arr.push(prompt("Enter your name to know your number in the waiting list:"));
//   if(arr.length == 1){
//     console.log(`Your name is ${arr.length}st in the waiting list!!`);
//   }else if (arr.length == 2){
//     console.log(`Your name is ${arr.length}nd in the waiting list!!`);
//   }else if (arr.length == 3){
//     console.log(`Your name is ${arr.length}rd in the waiting list!!`);
//   }else{
//     console.log(`Your name is ${arr.length}th in the waiting list!!`);
//   }
// }
// namePosition();


function namePosition(){
  arr.push(prompt("Enter your name to know your number in the waiting list:"));
  let newArr = arr.map(() => arr.length);
  console.log(`Your name is ${newArr.length}th in the waiting list!!`);
}
namePosition();