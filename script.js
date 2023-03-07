
// alert ('Hello');

// let ToNumber = prompt('enter a number');
// let ToNumberS = prompt ('enter the second');

// let stringToNumber = Number(ToNumber);
// let stringToNumberS = Number(ToNumberS);

// let sum = (stringToNumber + stringToNumberS);
// let diff = (stringToNumber - stringToNumberS);
// let mult = (stringToNumber * stringToNumberS);
// let div = (stringToNumber / stringToNumberS);
// // console.log (sum,diff,mult,div);

// alert ('Calculations are finished!\n'
// + stringToNumber + ' ' + '+' + ' ' + stringToNumberS + ' ' + '=' + ' ' + sum + '\n'
// + stringToNumber + ' ' + '-' + ' ' + stringToNumberS + ' ' + '=' + ' ' + diff + '\n'
// + stringToNumber + ' ' + '*' + ' ' + stringToNumberS + ' ' + '=' + ' ' + mult + '\n'
// + stringToNumber + ' ' + '/' + ' ' + stringToNumberS + ' ' + '=' + ' ' + div);

// for (let char of "Hello 0 0 0 ") {
//   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }



// alert ('Hello My Friend');

// let one = prompt("enter the first number");
// let two = prompt("enter the second number");

// let toOneNumber = Number (one);
// let toTwoNumber = Number (two);

// let sum = toOneNumber + toTwoNumber;
// let diff = toOneNumber - toTwoNumber;
// let mult = toOneNumber * toTwoNumber;
// let div = toOneNumber / toTwoNumber ;

// let allValues = ("Calculations are finished!" + "\n" 
// + toOneNumber + " " + "+" + " " + toTwoNumber + " " + "=" + " " + sum + "\n"
// + toOneNumber + " " + "-" + " " + toTwoNumber + " " + "=" + " " + diff + "\n"
// + toOneNumber + " " + "*" + " " + toTwoNumber + " " + "=" + " " + mult + "\n"
// + toOneNumber + " " + "/" + " " + toTwoNumber + " " + "=" + " " + div + "\n");
// alert (allValues);














// let name = prompt('What is your name?');
// let userOld = prompt('How old are you?');
// let all = 2023 - userOld;
// alert ("ты года рождения " + all);


// let number = Boolean (1);
// let srt = 'sove\n ka\'loe'
// console.log (srt);

// let userAll = 'Hello!' + ' ' + userName + '! ' + 'You are' + ' ' +  userOld + ' ' + 'years old!' + ' '  + 'You live in' + ' ' + userFrom ;
// alert(userAll)
// let templateString = `Hello! ${userName}, ${userOld} ${userFrom}`;
// console.log(templateString);













document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open");
    document.querySelector("body").classList.toggle("lock")
  })
})





// let headerBurger = document.querySelector('.header__burger');
// let menu = document.querySelector('.header__menu');
// let close =document.querySelector('.banner');
// let closePortfolio = document.querySelector('.title__portfolio');


// headerBurger.addEventListener('click', function(){
//   headerBurger.classList.toggle('active');
//   menu.classList.toggle('active');
//   close.classList.toggle('close')
//   closePortfolio.classList.toggle('close')
// });