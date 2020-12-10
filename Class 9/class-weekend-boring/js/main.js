// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   //Conditionals go here

//   if(day == "Tuesday" || day == "Thursday") {
//     alert("CLASS YAY!!")
//   } 
//   else if(day == "Saturday" || day == "Sunday"){
//     alert("WEEKENDDDDDDD")
//   }
//   else {
//     alert("BORINGGGGGGGG")
//   }
// }

document.querySelector('#check').addEventListener('click', check)

function check(){
  
  const day_input = document.querySelector('#day').value

  day = day_input.toLowerCase();

  if(day == "tuesday" || day == "tue" || day == "thur" || day == "thursday") {
  alert("CLASS YAYYYYY!!")
  }

  else if(day == "saturday" || day == "sat" || day == "sunday" || day == "sun") {
    alert("WEEKEND!!!")
  }
  else{
    alert("BORINGGGG!!")
  }
}
