// var myHeading = document.querySelector('.header__link');
// myHeading.textContent = 'Hello world!';

// alert('Hello')

// let userName = prompt('What is your name?');
// let userOld = prompt('How old are you?');
// let userFrom = prompt('Where are you from');

// let userAll = 'Hello!' + ' ' + userName + '! ' + 'You are' + ' ' +  userOld + ' ' + 'years old!' + ' '  + 'You live in' + ' ' + userFrom ;
// alert(userAll)
let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let close =document.querySelector('.banner');



headerBurger.addEventListener('click', function(){
  headerBurger.classList.toggle('active');
  menu.classList.toggle('active');
  close.classList.toggle('close')
});


